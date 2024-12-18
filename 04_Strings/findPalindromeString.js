// Find the string is palindrome or not
const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

const myStr = "eye";
console.log(`String: ${myStr}`);
console.log(`Is Palindrome: ${isPalindrome(myStr)}`);
