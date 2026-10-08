//Question 3: File Module- Create a script that will do the following: 
// 1. Remove Log files o remove all the files from the Logs directory,
// if exists o output the file names to delete o remove the Logs directory 
// 2. Create Log files o create a Logs directory, 
// if it does not exist o change the current process to the new Logs directory
// create 10 log files and write some text into the file o output the files names to console

const { log } = require('console');
const fs = require('fs');
const path = require('path');
const { channel } = require('process');
const logsDir = process.cwd();

const filepath = path.join(logsDir,"logs");

process.chdir(logsDir);

for ( let i =0, i < 10,  i ++){
    const fileName = `logs{i} + text`;
}

console.log(fileName);
