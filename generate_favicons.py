from PIL import Image
import os
import sys

# Install Pillow if not present (best effort)
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

source_path = "/home/matheus/.gemini/antigravity/brain/a11c9de2-5184-4d2b-80ce-52e226e3e9df/media__1771208515896.png"
output_dir = "/home/matheus/Área de trabalho/PPdiniz/web/public"

sizes = [(16, 16), (32, 32), (48, 48)]

if not os.path.exists(source_path):
    print(f"Error: Source file not found at {source_path}")
    sys.exit(1)

try:
    img = Image.open(source_path)
    # Ensure transparency is preserved
    if img.mode != 'RGBA':
        img = img.convert('RGBA')

    for size in sizes:
        resized_img = img.resize(size, Image.Resampling.LANCZOS)
        output_path = os.path.join(output_dir, f"favicon-{size[0]}x{size[1]}.png")
        resized_img.save(output_path, "PNG")
        print(f"Saved {output_path}")

except Exception as e:
    print(f"Error processing image: {e}")
    sys.exit(1)
