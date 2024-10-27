// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
let checkPalindrome = (num) => {
    let orgNum = num.toString();
    let reversed = "";
    for (let i = orgNum.length - 1; i >= 0; i--) {
        reversed += orgNum[i];
    }
    let revConvertToNum = parseInt(reversed);
    return num === revConvertToNum ? true : false;
}
let num = 10101;
if (checkPalindrome(num)) {
    console.log(`${num} is palindrome number`);
} else {
    console.log(`${num} is not palindrome number`);
}