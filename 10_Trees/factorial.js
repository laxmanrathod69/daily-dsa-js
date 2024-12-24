// Recursion function that counts factorial number
const factorial = (num) => (num === 1 ? 1 : factorial(num - 1) * num);

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
