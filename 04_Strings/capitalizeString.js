// Capitalize the first letter of each word in a string.
const capitalizingString = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const myStr = "LAXMAN RATHOD";
console.log(`String: ${myStr}`);
console.log(`Capitalized: ${capitalizingString(myStr)}`);
