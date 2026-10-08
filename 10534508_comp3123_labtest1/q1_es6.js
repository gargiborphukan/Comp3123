 //function named lowerCaseWords that takes a mixed array as input.  
 // The function will do the following.  return a promise that is resolved or rejected  
 // filter the non-strings and lower case the remaining words 

 const mixedArray = ["Gargi", 10, "Borphukan", 15, "Comp 3123", 34, "Lab Tset 1", 508]

//function to accept the mised array and return a promise
function lowerCaseWords(array){
    let p1 = new Promise(function(resolve,reject){ //creates a promise and stores it in p1
        if (!Array.isArray(array) || array.length === 0 ){ //!array.is array is asking is it not an array
            reject("Error: Input must be an array") //reject if the input is NOt an array Or input is empty
            
        }
         else{
            let strings = array.filter(item => typeof item === "string");//filter the array so only strings remain
            let lowerCaseWords = strings.map(item => item.toLowerCase());//converts eacn string to lowercase

             resolve(lowerCaseWords);//resolve the promise with the final lowercase array
         
         } 
    });

         //return the promise from the fun
    return p1;
}

//call the fun after the fun defination
    lowerCaseWords(mixedArray)
    .then(result => 
        {console.log(result);

    })
    .catch(error => 
        {console.log(error);


    });

   
     

