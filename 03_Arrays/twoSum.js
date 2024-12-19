// A list having n elements sum two numbers and result equal to the targeted number and return their positions too.
const twoSum = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === target) {
        return { add: list[j] + list[i], position: [i, j] };
      }
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
