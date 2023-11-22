//Program 1: Append Object to Array Using push()
// program to append an object to an array
function insertObject(arr, obj) {
    // append object
    arr.push(obj);
    console.log(arr);
}
// original array
let array = [1, 2, 3];
// object to add
let object = {x: 12, y: 8};
// call the function
insertObject(array, object);

/////////////////////////////////////////////////////////////////////
//Program 2: Append Object to Array Using splice()
// program to append an object to an array
function insertObject(arr, obj) {
   // find the last index
    let index = arr.length;
    // appending object to end of array
    arr.splice(index, 0, object);
    console.log(arr);
}
// original array
let array = [1, 2, 3];
// object to add
let object = {x: 12, y: 8};
// call the function
insertObject(array, object);

///////////////////////////////////////////////////////////////////////////////
//Program 3: Append Object Using Spread Operator
// program to append an object to an array
function insertObject(arr, obj) {
    // append object
     arr = [...arr, object];
     console.log(arr);
 }
 // original array
 let array = [1, 2, 3];
 // object to add
 let object = {x: 12, y: 8};
 // call the function
 insertObject(array, object);

 
 ////////////////////////////////////////////////////////////////////////////////
 //Program: Check Array Using Array.isArray()
// program to check if an object is an array
function checkObject(arr) {
    // check if arr is array
    const result = Array.isArray(arr);
    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }
}
const array = [1, 2, 3];
// call the function
checkObject(array);


