#!/usr/bin/env python3
"""Fix all import paths from absolute to alias-based paths."""

import os
import re
from pathlib import Path

def fix_imports_in_file(file_path):
    """Fix imports in a single file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the absolute path with the @/ alias
        original_content = content
        content = re.sub(
            r"from ['\"]\/workspaces\/RevelationTaxRelief\/",
            "from '@/",
            content
        )
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Fixed: {file_path}")
            return True
        return False
    except Exception as e:
        print(f"✗ Error in {file_path}: {e}")
        return False

def main():
    """Main function to fix all imports."""
    workspace_root = Path('/workspaces/RevelationTaxRelief')
    count = 0
    
    # Find all TypeScript files
    for file_path in workspace_root.rglob('*'):
        if file_path.suffix in ['.tsx', '.ts']:
            # Skip node_modules and .next
            if 'node_modules' in str(file_path) or '.next' in str(file_path):
                continue
            
            if fix_imports_in_file(str(file_path)):
                count += 1
    
    print(f"\nCompleted! Fixed {count} files.")

if __name__ == '__main__':
    main()
