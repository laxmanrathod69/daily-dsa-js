/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const inDegree = Array(n).fill(0);
  const result = [];
  for (const [node, edge] of edges) inDegree[edge]++;
  for (let i = 0; i < inDegree.length; i++) if (!inDegree[i]) result.push(i);
  return result;
};

const edges = [
  [0, 1],
  [0, 2],
  [2, 5],
  [3, 4],
  [4, 2],
];
const n = 6;
console.log(findSmallestSetOfVertices(n, edges)); // Output: [0,3]
// Explanation: It's not possible to reach all the nodes from a single vertex. From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3].
