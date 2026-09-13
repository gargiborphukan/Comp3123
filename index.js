console.log("Hello, World!");

var a = 100
a = "Test"
console.log(a);

b = 200
b = "Another Test"
var b = "b re-declared"
console.log(b);

//ES6
let c = 300
console.log(c)
c = "yet Another Test"
//let c = 400//  Tis will throw an error because 'c' has already been declared//
console.log(c);

let d= 500
d =500

const x = 6000
//x = "test"//error
console.log(x);

//---------------------------------//
function testLetConst (){
    let c =400
    const x = 700
    console.log('IN BLOCK c: ${c}');
}
testLetConst();
console. log('OUT Block c: ${c}');
//--------------------------------//

var flag = false
console.log(typeof a)
console.log(typeof c)
console.log(typeof flag)
console.log(typeof testLetConst)

//------------------------------//
//Declaring a function as expression//
let sayHello = function(){
    console.log("Hello,World! Again");

}
let greet = () => {
    console.log("hello, World! Again using Arrow Function");
}
greet();

//Array Handling
let arr = [1, "TWO", 3, 4, "FIVE", null, false]
console.log(arr)
console.log(arr[1])
console.log(arr.length)

var name 
console.log(name)
console.log(typeof name)

let obj = null//object type
console.log(obj)
console.log(typeof obj)

let city = {}//object type
console.log(city)
console.log(typeof city)

//Map
let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
let newnumbers = numbers.map((num) => num * 2)
    console.log(newnumbers)

//Filter    
 let evenNumbers = numbers.filter((n) => n % 2 === 0)
 console.log(evenNumbers)  

 //Reduce
 let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
 console.log (sum)


//ForEach
 numbers.map((num) => num * 2)
    .filter ((n) => n > 2)
    .forEach((num) => console.log(num))


   