function add(x,y) {
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

const Arithmetic = { 
    add,
    subtract,
    multiply
};

// Default export 
export default Arithmetic;

// Named exports
export { add, subtract };