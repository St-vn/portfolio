import os
import subprocess
import sys

def main():
    templates_dir = "cv_templates"
    output_tex_dir = os.path.join(templates_dir, "generated")
    public_resumes_dir = os.path.join("public", "assets", "resumes")

    os.makedirs(output_tex_dir, exist_ok=True)
    os.makedirs(public_resumes_dir, exist_ok=True)

    tracks = ["software", "gamedev", "hardware"]
    languages = ["en", "fr"]

    print("Generating merged LaTeX files...")

    generated_files = []

    for track in tracks:
        for lang in languages:
            base_filename = f"base_{lang}.tex"
            module_filename = f"{track}_{lang}.tex"
            target_filename = f"{track}_{lang}.tex"

            base_path = os.path.join(templates_dir, base_filename)
            module_path = os.path.join(templates_dir, module_filename)
            target_path = os.path.join(output_tex_dir, target_filename)

            if not os.path.exists(base_path) or not os.path.exists(module_path):
                print(f"Error: Missing base {base_path} or module {module_path}")
                continue

            with open(base_path, "r", encoding="utf-8") as f:
                base_content = f.read()

            with open(module_path, "r", encoding="utf-8") as f:
                module_content = f.read()

            merged_content = base_content.replace("%CONTENT_PLACEHOLDER%", module_content)

            with open(target_path, "w", encoding="utf-8") as f:
                f.write(merged_content)

            generated_files.append((target_path, f"{track}_{lang}.pdf"))
            print(f"  Created: {target_path}")

    # Now attempt compilation
    print("\nAttempting to compile LaTeX to PDF using pdflatex...")
    
    pdflatex_found = False
    pdflatex_cmd = "pdflatex"
    
    try:
        # Check if pdflatex is in system PATH
        result = subprocess.run([pdflatex_cmd, "--version"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if result.returncode == 0:
            pdflatex_found = True
    except FileNotFoundError:
        pass

    # Fallback to local MiKTeX user installation path on Windows
    if not pdflatex_found:
        local_appdata = os.environ.get("LOCALAPPDATA", "")
        if local_appdata:
            possible_path = os.path.join(local_appdata, "Programs", "MiKTeX", "miktex", "bin", "x64", "pdflatex.exe")
            if os.path.exists(possible_path):
                pdflatex_cmd = possible_path
                pdflatex_found = True

    if not pdflatex_found:
        print("\n" + "="*80)
        print("WARNING: 'pdflatex' executable was not found on your system PATH.")
        print("Merged LaTeX files have been generated successfully in: cv_templates/generated/")
        print("To compile these to PDF, please install a LaTeX distribution (like MikTeX or TeXLive),")
        print("make sure 'pdflatex' is in your system PATH, and run this script again.")
        print("Dummy/placeholder PDF files will be written to prevent download 404 errors.")
        print("="*80 + "\n")

        # Create dummy PDF files to prevent 404s
        for _, pdf_name in generated_files:
            pdf_path = os.path.join(public_resumes_dir, pdf_name)
            # Write a minimal dummy PDF structure so it is a valid file download
            dummy_pdf_content = (
                "%PDF-1.4\n"
                "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"
                "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n"
                "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R >>\nendobj\n"
                "4 0 obj\n<< /Length 50 >>\nstream\n"
                "BT\n/F1 12 Tf\n72 712 Td\n(Placeholder for " + pdf_name + ") Tj\nET\n"
                "endstream\nendobj\n"
                "xref\n0 5\n0000000000 65535 f\n0000000009 00000 n\n0000000062 00000 n\n"
                "0000000117 00000 n\n0000000213 00000 n\n"
                "trailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n312\n%%EOF\n"
            )
            with open(pdf_path, "w", encoding="ascii") as f:
                f.write(dummy_pdf_content)
            print(f"  Written placeholder: {pdf_path}")
        return

    # Compile files using pdflatex
    for tex_path, pdf_name in generated_files:
        print(f"Compiling {tex_path}...")
        # Compile pdflatex into the public/assets/resumes directory
        cmd = [
            pdflatex_cmd,
            "-interaction=nonstopmode",
            "-enable-installer",
            f"-output-directory={public_resumes_dir}",
            tex_path
        ]
        result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        if result.returncode == 0:
            print(f"  Successfully compiled: {os.path.join(public_resumes_dir, pdf_name)}")
        else:
            print(f"  Error compiling {tex_path}: {result.stderr or result.stdout}")

if __name__ == "__main__":
    main()
