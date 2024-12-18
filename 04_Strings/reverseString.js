// Reverse the String
const reverseString = (str) => {
  let reversedString = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString.push(str[i]);
  }

  return reversedString.join("");
};

const myStr = "Apple";
console.log(`String: ${myStr}`);
console.log(`Reversed: ${reverseString(myStr)}`);
