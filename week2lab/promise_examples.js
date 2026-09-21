//

let p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
    let error = false;
    if(error){
        reject("Error: Something went wrong!");   
    } else {
        resolve({ status: 200, message :"Success! The operation is completed successfully"

        });
    }
    
}, 1000);

});

p1.then((success) => {
    console.log(success);
}, (error) => {
    console.log(error);   
});

p1.then((success) => {
    console.log(success);
}).catch((error) => {
    console.log(error); 
}).finally(() => {
    console.log("Promise has been settled (either resolved or rejected).")
});

//Promise chaining
p1.then((success) => {
    console.log(success);
    return success.message
}).then((data) => {
    console.log("This is the second then block.");
    console.log("Data from the first then block:", data);
    return data;
}).then((data) => {
    console.log("This is the third then block.");
    console.log("Data from the second then block.", data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise has been settled (either resolved or rejected).")
});