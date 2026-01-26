import re
import sys

def check_seo(file_path):
    print(f"Analyzing {file_path}...")
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Check H1
    if "<h1" not in content and "h1 " not in content: # Simplified check for TSX/HTML
        print("❌ Missing H1 tag")
    else:
        print("✅ H1 tag present")
        
    # Check Meta Description (in Layout)
    if "metadata" in content and "description" in content:
        print("✅ Metadata description present")
    
    # Check Alt tags
    if "<img" in content or "<Image" in content:
        if "alt=" not in content:
            print("⚠️ Potential missing alt text in images")
        else:
            print("✅ Alt text found (manual review recommended)")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        check_seo(sys.argv[1])
    else:
        print("Usage: python check.py <file>")
