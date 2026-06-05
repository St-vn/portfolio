import os
from PIL import Image

input_path = "assets/images/empty_cd_case.png"
output_path = "assets/images/empty_cd_case.png"

# Load image
img = Image.open(input_path).convert("RGBA")
width, height = img.size
print(f"Original size: {width}x{height}")

# Define background detection criteria
def is_bg_pixel(pixel):
    r, g, b, a = pixel
    if a == 0:
        return True
    # Check if it is near white or grey greyscale pixel
    if r > 175 and g > 175 and b > 175:
        if max(r, g, b) - min(r, g, b) < 15:
            return True
    return False

# Initialize background mask
bg_mask = [[False for _ in range(height)] for _ in range(width)]
queue = []

# Enqueue all boundary pixels that match background criteria
boundary = []
for x in range(width):
    boundary.append((x, 0))
    boundary.append((x, height - 1))
for y in range(1, height - 1):
    boundary.append((0, y))
    boundary.append((width - 1, y))

for x, y in boundary:
    if is_bg_pixel(img.getpixel((x, y))):
        queue.append((x, y))
        bg_mask[x][y] = True

# Flood fill (BFS)
directions = [(0, 1), (0, -1), (1, 0), (-1, 0), (1, 1), (-1, 1), (1, -1), (-1, -1)]
while queue:
    cx, cy = queue.pop(0)
    for dx, dy in directions:
        nx, ny = cx + dx, cy + dy
        if 0 <= nx < width and 0 <= ny < height:
            if not bg_mask[nx][ny]:
                pixel = img.getpixel((nx, ny))
                if is_bg_pixel(pixel):
                    bg_mask[nx][ny] = True
                    queue.append((nx, ny))

# Modify pixels and find bounding box of non-background content
min_x, min_y = width, height
max_x, max_y = -1, -1

new_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        if bg_mask[x][y]:
            new_pixels.append((0, 0, 0, 0))
        else:
            new_pixels.append((r, g, b, a))
            if x < min_x: min_x = x
            if y < min_y: min_y = y
            if x > max_x: max_x = x
            if y > max_y: max_y = y

print(f"Content Bounding Box: ({min_x}, {min_y}) to ({max_x}, {max_y})")
print(f"Content Size: {max_x - min_x + 1}x{max_y - min_y + 1}")

# Create transparent image
transparent_img = Image.new("RGBA", img.size)
transparent_img.putdata(new_pixels)

# Crop to content bounding box
cropped_img = transparent_img.crop((min_x, min_y, max_x + 1, max_y + 1))
cropped_img.save(output_path, "PNG")

print("SUCCESS: Image background removed and cropped to content.")
