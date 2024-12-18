// Find the number is palindrome or not
const isPalindrome = (num) => {
  return num === Number(num.toString().split("").reverse().join(""));
};

const myNum = 12321;
console.log(`Number: ${myNum}`);
console.log(`Is Palindrome: ${isPalindrome(myNum)}`);
