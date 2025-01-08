/**
 * @param {string[]} dict
 * @param {number} k
 * @return {string}
 */
class Solution {
  findOrder(dict, k) {
    // Create adjacency list for graph
    const adj = Array.from({ length: k }, () => []);

    for (let i = 0; i < dict.length - 1; i++) {
      const word1 = dict[i];
      const word2 = dict[i + 1];
      const minLength = Math.min(word1.length, word2.length);

      let foundDifference = false;
      for (let j = 0; j < minLength; j++) {
        if (word1[j] !== word2[j]) {
          const from = word1[j].charCodeAt(0) - "a".charCodeAt(0);
          const to = word2[j].charCodeAt(0) - "a".charCodeAt(0);
          adj[from].push(to);
          foundDifference = true;
          break;
        }
      }

      // If no difference is found and word1 is longer, the input is invalid
      if (!foundDifference && word1.length > word2.length) {
        return "";
      }
    }

    // Perform topological sort using Kahn's algorithm
    const inDegree = Array(k).fill(0);
    for (let i = 0; i < k; i++) {
      for (const neighbor of adj[i]) {
        inDegree[neighbor]++;
      }
    }

    const queue = [];
    for (let i = 0; i < k; i++) {
      if (inDegree[i] === 0) queue.push(i);
    }

    const topoOrder = [];
    while (queue.length > 0) {
      const current = queue.shift();
      topoOrder.push(current);

      for (const neighbor of adj[current]) {
        inDegree[neighbor]--;
        if (inDegree[neighbor] === 0) queue.push(neighbor);
      }
    }

    // If the topoOrder length is less than k, there's a cycle, return ""
    if (topoOrder.length < k) return "";

    // Convert topoOrder indices to characters
    return topoOrder
      .map((index) => String.fromCharCode(index + "a".charCodeAt(0)))
      .join("");
  }
}

const sol = new Solution();
const dict = ["baa", "abcd", "abca", "cab", "cad"];
const k = 4;
console.log(sol.findOrder(dict, k));
