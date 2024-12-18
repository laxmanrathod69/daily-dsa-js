// Print numbers from 1 to n and print "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5, Else print the number itself.
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(15);

// Output:
1;
2;
Fizz;
4;
Buzz;
Fizz;
7;
8;
8;
Fizz;
Fizz;
Buzz;
11;
Fizz;
13;
14;
FizzBuzz;
