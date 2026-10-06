/**GLOBAL OBJECTS */
//console.log(module);//module or module.exports is a global obj o
//console.log(console)
//console.log(__dirname)
//console.log(__filename)
//console.log(process)
//console.log(global)

/**CORE MODULES */
//core/in build module
//const http = require("node:http")
//const fs = require('node:fs')
//const path = require ('node:path')
//const os = require('node:os')

//console.log('HTTP:', http);
//console.log('OS:', os.platform(), os.release(), os.type())


const msg = require('./message.js')
console.log(msg)

const arithmetic = require('./arithmetic.js')
console.log(arithmetic)

const college = require('./college.js')
console.log(college.College)
console.log(college.students)
