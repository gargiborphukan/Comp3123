

function fecthData(a) {
    let p1 = new Promise(function(resolve, reject) { //promise created in one function
    setTimeout(() => {
    if(a > 10){
        reject({
            status : 400,
            message: "Error: The input value is too large!"});   
    } else {
        resolve({ 
            status: 200, 
            message :"Success! The operation is completed successfully"
        });
    }    
}, 1000);

});
    return p1;
}
fecthData(5) //returns promise
    .then((success) => {
        console.log(success);
        return success.message;
    }).catch((error) => {
        console.log(error);
    })

fecthData(50) //returns promise
    .then((success) => {
        console.log(success);
        return success.message;
    }).catch((error) => {
        console.log(error);
    })


    //async function
    //will return promise by default cuz of parameter (a)
    //if no paramete only void will be returned

    async function fecthDataAsync() {
        return fecthData(5); //This will return a promise than
        
    }

    fecthDataAsync().then((success) => {
        console.log("This is the async function result: ");
        console.log(success);
    }).catch((error) => {
        console.log("This is the async function error: ")
        console.log(error);
    })

    async function manageAccount(){
        console.log("Fetching data using async/await...");
        let response = await fecthData(5)//here we want to avoid .then statement,so we use await
        console.log(response);
        console.log("----End of async/await example----");
        
    }
    manageAccount();