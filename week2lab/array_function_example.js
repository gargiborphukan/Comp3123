//ARROW FUNCTION

//Function declaraation
function add(a,b){
    return a + ab;
}

//Function expression
var add = function(a,b){
    return a + b;
}

//converting to arrow fun
//expression is converted to arrow fun
add = (a,b) => {
    return a+ b ;
}

//another way of doing it
add = (a,b) => a + b; //concise body syntax

 
//another example
greet = (name) => {
    return `Hello, ${name}!`;
}

//2nd method to write the previous code
greet = name => `Help, ${name}!`;


//if there is no parameter

var checkArrow = () => {
    console.log("This is an arrow function");
    console.log(this);//"this " refers to enclosing content
    console.log(arguments); // arguments is not available in arrow functions
}

checkArrow();