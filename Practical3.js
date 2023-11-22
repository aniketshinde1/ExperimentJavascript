const readline = require('readline');

// Function to reverse a string
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// Create an interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Take input from the user
rl.question('Enter a string: ', (string) => {
    const result = reverseString(string);
    console.log(result);
    rl.close();
});
