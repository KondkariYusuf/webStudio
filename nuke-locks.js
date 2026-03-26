import fs from 'fs';
import path from 'path';

function cleanLocks(dir) {
    let entries;
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (err) {
        return; 
    }

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        // Safely ignore symlinks to avoid the Prisma infinite loop!
        if (entry.isDirectory() && !entry.isSymbolicLink()) {
            if (entry.name !== '.git' && entry.name !== 'node_modules') {
                cleanLocks(fullPath);
            }
        } else if (entry.name === 'package-lock.json') {
            try {
                fs.unlinkSync(fullPath);
                console.log(`✅ Deleted lockfile: ${fullPath}`);
            } catch (err) {
                console.error(`❌ Failed to delete ${fullPath}`);
            }
        }
    }
}

console.log("Hunting down package-lock.json files safely...");
cleanLocks('.');
console.log("Cleanup complete!");