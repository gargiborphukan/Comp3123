
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiplication = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
           
    }
    return a / b;
}

//how to export
module.exports ={add, subtract, multiplication,divide};


const square = (a) => {
    return a * a;
}

module.exports ={add, subtract, multiplication,divide, square};