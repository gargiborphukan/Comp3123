//Given the script file callbacks.js, write a script that does the following:
// Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
//  Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 500ms.
// Call both promises separately and handle the resolved and reject results and then output to the console 

//fun named resolve
const resolvedPromise = () => {
    //return a new promise
    return new Promise((resolve, reject) => {
        //wait for 500 millisec before executing the code inside
        setTimeout(() => {
            //create an obj containing the success  message
        let success = {'message': 'resolved promise!'};
        //resolve the promise and send the sucess obj to .then
        resolve(success);
    }, 500)//set the timeout delay to 500 ms
    });
    
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let error = {'message': 'error : rejected promise!'};
        reject(error);        
        },500) 
    });
    
};
//call the resolevd promise fun
resolvedPromise()
//handle the succesful result from resolve()
.then(result => {
    console.log(result);
})
//handle the error if the promise is rejected
.catch(error => {
    console.log(error);
});

//call the rejected promise
rejectedPromise() //handle the successful result if the promise is resolved
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});