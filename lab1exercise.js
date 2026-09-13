//Q1 - JavaScript program to capitalize the first letter of each word of a given string//

//1. Split the sentence into an array of words so we can manipulate each word individually
//2.Iterate over each word with  a for loop
//3.Join all the words to from a senetence
const brownFox = "the quick brown fox";
const words = brownFox.split(" ");

for( let i = 0; i < words.length; i++){
    words [i] = words[i][0].toUpperCase() +  words[i].substring(1);
}

words.join(" ");

console.log(words);

//Q2.JavaScript program to find the largest of three given integers
//1.defining a function 
//2. using the math.max function

function max(num1, num2, num3){
    return Math.max(num1, num2, num3)
}

const find = max (1000,501,400);
console.log(max(1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));


//Q3.JavaScript program to move last three character to the start 
// of a given string. The string length must be greater or equal to three
//1.defining a function with strng parameter
//2.Using slice method to extract the last three characters and the remaining part of the string
//3.the two are concatenated to form the output
//using an if statement



function right(str){
    if(str.length >= 3){
        return str.slice(-3) + str.slice(0, -3);
    }
    return str;

}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

//Q4.Write a JavaScript program to find the types of a given angle
//1.defing a function with parameters of angel

function angle_Type(angle){
        if(angle < 90){
            return "Acute Angle.";
        }
        if(angle === 90){
            return "Rigth Angle.";
        }
        if(angle < 180){
            return "Obtuse Angle.";
        }
        return " Straight Angle.";
}
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));


 
