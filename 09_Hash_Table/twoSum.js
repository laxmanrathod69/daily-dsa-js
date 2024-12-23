// Sum of two elements in an array that equals to a target value
const twoSum = (num, target) => {
  if (!num) {
    return null;
  }
  const mapSum = {};
  for (let i = 0; i < num.length; i++) {
    const compliment = target - num[i];
    if (compliment in mapSum && mapSum[compliment] !== i) {
      return [mapSum[compliment], i];
    }
    mapSum[num[i]] = i;
  }
  return [];
};

console.log(twoSum([4, 2, 6, 3], 9)); // 5, 7, 3, 6 = 4, 2, 6, => 6 + 3 = 9
