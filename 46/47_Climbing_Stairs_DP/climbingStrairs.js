/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n <= 1) return 1;
  let firstNum = 1,
    secondNum = 1,
    thirdNum = 0;
  for (let i = 2; i <= n; i++) {
    thirdNum = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = thirdNum;
  }
  return thirdNum;
};

console.log(climbStairs(5)); // 8
