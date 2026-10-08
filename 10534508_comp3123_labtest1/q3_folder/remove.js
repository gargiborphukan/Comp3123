const fs = require('fs');
const path = require('path');
const logsDir = process.cwd();

const filepath = path.join(logsDir,"logs");

if(fs.existsSync(filepath)){
    const files =fs.readFileSync(filepath);

    console.log(files);
}
