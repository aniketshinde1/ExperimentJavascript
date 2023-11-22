JavaScript Program to Reverse a String

Program 1: Reverse a String Using for Loop
// program to reverse a string
function reverseString(str) {
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
// take input from the user
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);

Output
Enter a string: hello world






Program 2: Reverse a String Using built-in Methods
// program to reverse a string
function reverseString(str) {
    // return a new array of strings
    const arrayStrings = str.split("");
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    // return the reversed string
    return joinArray;
}
// take input from the user
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);


Output
Enter a string: hello
olleh


JavaScript Program to Replace Characters of a String

// program to replace a character of a string
const string = 'Mr Red has a red house and a red car';
// replace the characters
const newText = string.replace('red', 'blue');
// display the result

console.log(newText);
Output
Mr Red has a blue house and a red car


Program 2: Replace Character of a String Using RegEx
// program to replace a character of a string
const string = 'Mr Red has a red house and a red car';
// regex expression
const regex = /red/g;
// replace the characters
const newText = string.replace(regex, 'blue');
// display the result
console.log(newText);
Output
Mr Red has a blue house and a blue car

JavaScript Program to Check Whether a String is Palindrome or Not

     Program 1: Check Palindrome Using for Loop
// program to check if the string is palindrome or not
function checkPalindrome(string) {
    // find the length of a string
    const len = string.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
// take input
const string = prompt('Enter a string: ');
// call the function
const value = checkPalindrome(string);
console.log(value);

Output
Enter a string: madam
It is a palindrome


Program 2: Check Palindrome using built-in Functions
// program to check if the string is palindrome or not
function checkPalindrome(string) {
    // convert string to an array
    const arrayValues = string.split('');
    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();
    // convert array to string
    const reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
//take input
const string = prompt('Enter a string: ');
checkPalindrome(string);
Output
Enter a string: hello
