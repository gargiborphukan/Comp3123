//1. Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
//and for..o

const gretter = (myArray, counter) => { //used AI to correct
    let greetText = "Hello";

    for(let name of myArray){ //used AI to correct
        console.log(`{greetText}${name}`);
    }

};

gretter(["Randy Savage", "Ric Flair", "Hulk Hogon"], 3);


//2. Using destructuring assignment syntax and the spread operator, write a function will capitalize the
//first letter of a string.

const capitalize = (string) => { //used AI to correct
    const [first, ...rest] = string; //used AI to correct
    const upperFirst = first.toUpperCase();//used AI to correct
    return[upperFirst,...rest].join('');//used AI to correct
    

};
console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//3. Using array.proto.map create function to use
//  the capitalize method in Exercise 2 to upper case
//the first character of each Color in the following array.

//Used AI to understand the concept,didnt use to code

const colors = ["red", "green", "blue"] 
const capitalizedColors = colors.map(capitalize)

console.log(capitalizedColors)


//4.Using array.proto.filter create a function 
// that will filter out all the values of 
// the array that are less than twenty.

//Used AI to understand the concept,didnt use to code

var values = [1, 60, 34, 30, 20, 5]
var filterLessThan20 = values.filter( value => value < 20);

console.log(filterLessThan20)

//5.Using array.proto.reduce create 
// calculate the sum and product of a given array

//Used AI to understand the concept,didnt use to code

var array = [1, 2, 3, 4]
var calculateSum = array.reduce((acc, curr) => {
    return acc + curr;
}, 0);
var calculateProduct = array.reduce((acc, curr) => {
    return acc * curr;
}, 1);

console.log(calculateSum);
console.log(calculateProduct);

//6.Using ES6 syntax for class and subclass using
//extends to create a Sedan subclass which derives
//from Car Class. The parameters for the Car class
//is the model and year. The parameters for the
//subclass is the model, year and balance
//Use the super key word in the Sedan subclass to set 
// the model and name in base Car constructor.


//used Ai to understand the exercise and correct the code


class Car {
    constructor( model, year){
        this. model = model
        this.year = year
    }
    
       details(){
        return (this.model + " " + this.year)
    }

}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance
    }

    info(){
        return (this.model + " " + this.year + " " + this.balance)
    }
        
    }


const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());

const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());