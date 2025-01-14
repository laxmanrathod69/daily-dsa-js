/**
 * @param {number[]} wordList
 * @param {string} startWord
 * @param {string} targetWord
 * @param {number} N
 * @returns {number}
 */

class Solution {
  wordLadderLength(startWord, targetWord, wordList, N) {
    const wordSet = new Set(wordList); // Convert wordList to a Set for faster lookup

    if (!wordSet.has(targetWord)) return 0; // If the targetWord is not in the wordList, return 0

    const queue = [];
    queue.push([startWord, 1]);

    while (queue.length > 0) {
      const [currentWord, level] = queue.shift();

      if (currentWord === targetWord) return level;

      // Process all possible one-letter transformations of the currentWord
      for (let i = 0; i < currentWord.length; i++) {
        const originalChar = currentWord[i];

        // 'a' to 'z'
        for (let charCode = 97; charCode <= 122; charCode++) {
          const newChar = String.fromCharCode(charCode);

          if (newChar === originalChar) continue;

          // Form the new word
          const transformedWord =
            currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

          if (wordSet.has(transformedWord)) {
            queue.push([transformedWord, level + 1]);
            wordSet.delete(transformedWord); // Remove the word from the set to prevent revisiting
          }
        }
      }
    }

    // If no transformation found
    return 0;
  }
}

const solution = new Solution();

// Test cases
const runTests = () => {
  console.log(
    "Test 1: " +
      solution.wordLadderLength(
        "der",
        "dfs",
        ["des", "der", "dfr", "dgt", "dfs"],
        5
      )
  ); // Output: 3

  console.log(
    "Test 2: " + solution.wordLadderLength("gedk", "geek", ["geek", "gefk"], 2)
  ); // Output: 2

  console.log(
    "Test 3: " +
      solution.wordLadderLength(
        "toon",
        "plea",
        ["poon", "plee", "same", "poie", "plea", "plie", "poin"],
        7
      )
  ); // Output: 7
};

runTests();
