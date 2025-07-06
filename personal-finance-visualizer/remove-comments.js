const fs = require('fs');
const path = require('path');
const strip = require('strip-comments');

function processFile(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');
    const stripped = strip(code);
    fs.writeFileSync(filePath, stripped, 'utf8');
}

function walkDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            processFile(fullPath);
        }
    });
}

walkDir(path.join(__dirname, 'src'));
console.log('All comments removed from .ts and .tsx files in src/.'); 