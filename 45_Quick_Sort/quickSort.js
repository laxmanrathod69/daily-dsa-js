/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */

class Solution {
  partition(arr, low, high) {
    const pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
      while (arr[i] <= pivot && i < high) i++;
      while (arr[j] > pivot && j > low) j--;

      if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
  }

  quickSort(arr, low, high) {
    if (low < high) {
      const pivot = this.partition(arr, low, high);
      this.quickSort(arr, low, pivot - 1);
      this.quickSort(arr, pivot + 1, high);
    }
  }
}

const qs = new Solution();
const arr = [4, 1, 3, 9, 7];
qs.quickSort(arr, 0, arr.length - 1);
console.log(arr); // Output: [1, 3, 4, 7, 9]
