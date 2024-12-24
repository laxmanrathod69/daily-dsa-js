// Recursion function that counts down from a number to 0
const countDown = (num) => {
  if (num === 0) {
    console.log("All done! 🥙");
    return;
  }
  console.log(num);
  countDown(num - 1);
  //   console.log(num);
};

countDown(10); // 10 9 8 7 6 5 4 3 2 1 All done! 🥙
