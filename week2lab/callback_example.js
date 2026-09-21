
//first example
function fetchData(callback) {
    setTimeout(() =>{
        console.log("Fetching data...");
        callback();
    
    }, 2000)

}

function callback(){
    console.log("Data fetched successfully");
}

fetchData(callback);

//second example

let succcessCallback = () => {
    console.log("--data fetched successfully!");
}

let errorCallback = () => {
    console.log("Data fetched successfully");
}

//function will accept two of the above function
function fetchDataWithCallbacks(succcessCallback, errorCallback) {
    setTimeout(() => {
        let success = true; // simulating a successful fetch
        if (success) {
            succcessCallback();
        } else {
            errorCallback();
        }
    }, 2000);
}

fetchDataWithCallbacks(succcessCallback, errorCallback);