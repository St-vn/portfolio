import React from 'react';

export const Profile: React.FC = () => {
  return (
    <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', height: '100%' }}>
      {/* Bio section */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ SYSTEM PROFILE: STEVEN CHHAY ]
        </h3>
        <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-primary)' }}>
          I build software at the intersection of engineering and applied physics. I have five years of
          experience in game development and full-stack software. My
          technical interests span aerodynamics, avionics systems, embedded systems, game development, fluid simulation,
          and more. I approach engineering problems using first principles.
        </p>
      </div>

      {/* Education Section */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ EDUCATION HISTORICAL LOG ]
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500, fontSize: '14px' }}>
              <strong>Concordia University</strong>
              <span>2026 - 2030</span>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Bachelor of Engineering in Computer Engineering
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500, fontSize: '14px' }}>
              <strong>Collège Lionel-Groulx</strong>
              <span>2023 - 2026</span>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Diploma of College Studies in Pure and Applied Science (DEC)
            </div>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ LANGUAGES ]
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px' }}>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            ENGLISH
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            FRENCH
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            KHMER
          </span>
        </div>
      </div>

      {/* Core Tooling Stack Overview */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ SPECIALIST FIELD MATRIX ]
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px' }}>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            AI ENGINEERING
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            PROMPT ENGINEERING
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            SOFTWARE ENGINEERING
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            GAME DEVELOPMENT
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            WEB DEVELOPMENT
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            MOBILE DEVELOPMENT
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            APPLIED PHYSICS
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            APPLIED MATHEMATICS
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            NETWORKING ARCHITECTURE
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            WORKFLOW AUTOMATION
          </span>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            SYSTEMS DEVELOPMENT
          </span>
        </div>
      </div>

      {/* {Programming Languages} */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ PROGRAMMING LANGUAGES ]
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px' }}>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            C#
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Python
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            TypeScript
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            JavaScript
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Lua/LuaU
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            SQL (Postgres + SQLite)
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            HTML/CSS
          </span>
        </div>
      </div>

      {/* Frameworks */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ FRAMEWORKS & TESTING ]
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px' }}>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            React
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Next.js
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            React Native
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Expo
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            FastAPI
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            FastMCP
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Playwright
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Vitest
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Tailwind CSS
          </span>
        </div>
      </div>

      {/* Developer Tools & Engines */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ DEVELOPER TOOLS & ENGINES ]
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px' }}>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Unity Engine
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Roblox Studio / API
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            VSCode
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            VSCommunity
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Fusion360
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Blender
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Git / GitHub
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Supabase
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Redis
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Vite
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Vercel
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Railway
          </span>
        </div>
      </div>

      {/* AI Utilities */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ AI UTILITIES ]
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px' }}>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Claude Code
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Antigravity
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            ChatGPT
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Gemini
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Cursor
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            GitHub Copilot
          </span>
        </div>
      </div>

      {/* Libraries */}
      <div>
        <h3 style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '4px', marginBottom: '8px', fontSize: '16px', fontWeight: 600 }}>
          [ LIBRARIES ]
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '12px' }}>
          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            NumPy
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Matplotlib
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            Mammoth
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            PDF Parse
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            PyTrend
          </span>

          <span style={{ padding: '2px 8px', border: '1px solid var(--accent-green)', color: 'var(--accent-green)', fontFamily: 'var(--font-system)', fontSize: '14px' }}>
            KaTeX
          </span>
        </div>
      </div>

    </div>
  );
};
