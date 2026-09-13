//object literal
let person = {
    name : "john",
    age  : 30,
    city : "new York",
    null : "NULL",
    undefined : undefined,
    ["Full Name"] : "John Doe",

    displayInfo: function() {
        console.log('Name: ${this.name}, Age: ${this.age}, City: ${this.city}');
    },

    displayArrow: () => {
        console.log('Name: ${this.name}, Age: ${this.age}, City: ${this.city}')
    }
};
console.log(person);
person.displayInfo();
console.log(person.name);
console.log(person["Full Name"]);//property can be excess with square bracket


//Destructuirng Assignment
const {
    name,
    age,
    city,
    null : n,
    
} = person
console.log(name, age, city, n)

 //more about functons
 function printData(fnm, lnm, city){
    console.log('this: ${this}')
    console.log('First Name: ${fnm}, Last Name: ${lnm}, City: ${city}');
 } 
 
printData ("gargi", "borphukan","toronto")  