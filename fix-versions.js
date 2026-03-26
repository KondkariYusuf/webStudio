import fs from 'fs';
import path from 'path';

function fixMissingVersions(dir) {
    let entries;
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (err) {
        return; 
    }

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        // Ignore node_modules and build folders to speed things up
        if (entry.isDirectory() && !['node_modules', '.git', 'dist', 'build'].includes(entry.name)) {
            fixMissingVersions(fullPath);
        } else if (entry.name === 'package.json') {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                const pkg = JSON.parse(content);
                let changed = false;

                // CRITICAL FIX: Catch missing (undefined) or whitespace-only versions
                if (!pkg.version || typeof pkg.version !== 'string' || pkg.version.trim() === '') {
                    console.log(`⚠️ Missing 'version' field found in: ${fullPath}`);
                    pkg.version = "0.0.0"; 
                    changed = true;
                }

                if (changed) {
                    fs.writeFileSync(fullPath, JSON.stringify(pkg, null, 2) + '\n');
                    console.log(`✅ Injected version 0.0.0 into: ${fullPath}`);
                }
            } catch (err) {
                // Skip invalid JSON
            }
        }
    }
}

console.log("Scanning for missing version fields...");
fixMissingVersions('.');
console.log("Done!");