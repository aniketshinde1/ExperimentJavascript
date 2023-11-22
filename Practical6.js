//JavaScript Program to Remove Specific Item From an Array
Program 1: Using For Loop
// program to remove item from an array
function removeItemFromArray(array, n) {
    const newArray = [];
    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);
console.log(result);


//////////////////////////////////////////////
//Program 2: Using Array.splice()
// program to remove item from an array
function removeItemFromArray(array, n) {
    const index = array.indexOf(n);
    // if the element is in the array, remove it
    if(index > -1) {
        // remove item
        array.splice(index, 1);
    }
    return array;
}
const result = removeItemFromArray([1, 2, 3 , 4, 5], 2);
console.log(result);






///////////////////////////JavaScript Program to Check if An Array Contains a Specified Value
//Program 1: Check Array Using includes()
// program to check if an array contains a specified value
const array = ['you', 'will', 'learn', 'javascript'];
const hasValue = array.includes('javascript');
// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}


//Program 2: Check Array Using indexOf()
// program to check if an array contains a specified value
const array = ['you', 'will', 'learn', 'javascript'];
const hasValue = array.indexOf('javascript') !== -1;
// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}

/////////JavaScript Program to Empty an Array////////////////////////////////
//Program 1: Empty Array by Substituting New Array
// program to empty an array
function emptyArray(arr) {
    // substituting new array
    arr = [];   
    return arr;
}
const array = [1, 2 ,3];
console.log(array);
// call the function
const result = emptyArray(array);
console.log(result);


//////////////////////////////////////////////////////////
//Program 2: Empty Array Using splice()
// program to append an object to an array
function emptyArray(arr) {
    // substituting new array
    arr.splice(0, arr.length);   
    return arr;
}
const array = [1, 2 ,3];
console.log(array);
// call the function
const result = emptyArray(array);
console.log(result);



///////////////////////////////////////////
Program 3: Empty Array by Setting Length 0
// program to empty an array
function emptyArray(arr) {
    // setting array length to 0
    arr.length = 0;   
    return arr;
}
const array = [1, 2 ,3];
console.log(array);
// call the function
const result = emptyArray(array);
console.log(result);


