import fs from 'fs';
import path from 'path';

function cleanNodeModules(dir) {
    let entries;
    try {
        // Read contents of the directory
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (err) {
        return; // Skip if we don't have permission or path is too weird
    }

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        // Crucial: We check !entry.isSymbolicLink() to avoid the Prisma infinite loop trap!
        if (entry.isDirectory() && !entry.isSymbolicLink()) {
            if (entry.name === 'node_modules') {
                console.log(`🗑️ Found: ${fullPath} - Deleting...`);
                try {
                    // Forcefully delete the folder and everything inside it
                    fs.rmSync(fullPath, { recursive: true, force: true });
                    console.log(`✅ Deleted: ${fullPath}`);
                } catch (err) {
                    console.error(`❌ Failed to delete ${fullPath}. Error: ${err.message}`);
                }
            } else if (entry.name !== '.git') {
                // If it's a normal folder, keep searching inside it
                cleanNodeModules(fullPath);
            }
        }
    }
}

console.log("Hunting down all node_modules folders...");
cleanNodeModules('.');
console.log("Cleanup complete!");