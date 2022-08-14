const fs = require('node:fs');
const path = require('path');
const color = require('colors')

const dir = process.argv.slice(2)[0];

let amountF = 0;
let amountD = 0;

const start = Date.now();

// tree command
const tree = (dir, depth = 0) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
            const name = path.join(dir, file);
            const stats = fs.statSync(name);
            if (stats.isDirectory()) {
                console.log(`${' '.repeat(depth)}├ ${file}/`.red);
                tree(name, depth + 2);
                amountD++;
            } else {
                console.log(`${' '.repeat(depth)}├ ${file} `.cyan);
                amountF++;
            }
        }
    );
}

if(!fs.existsSync(`${dir}`)) {
    if (dir === undefined) {
        console.log(`Invalid directory`.red);
    } else {
        console.log(`\"${dir}\" does not exist`.red);
    }
    process.exit(1);
}


console.log(`Scanning ${dir}`.red)
tree(`./${dir}`)

const end = Date.now();
const time = end - start;
console.log(`Scanned ${amountF} files and ${amountD} directories in ${time}ms`.rainbow)