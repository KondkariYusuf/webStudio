import fs from 'fs';
import path from 'path';

function fixWorkspaces(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        
        // If it's a directory (and not node_modules/.git), search inside it
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                fixWorkspaces(fullPath);
            }
        } 
        // If it's a package.json file, check and replace workspace links
        else if (file === 'package.json') {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('workspace:')) {
                const original = content;
                // Regex to replace "workspace:anything" with "*"
                content = content.replace(/"workspace:[^"]*"/g, '"*"');
                
                if (original !== content) {
                    fs.writeFileSync(fullPath, content);
                    console.log(`✅ Fixed: ${fullPath}`);
                }
            }
        }
    }
}

console.log("Scanning for rogue workspace:* links...");
fixWorkspaces('.');
console.log("Done!");