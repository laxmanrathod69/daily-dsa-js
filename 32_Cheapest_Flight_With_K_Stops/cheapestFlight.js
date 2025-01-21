/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

const findCheapestFlight = (n, flights, src, dst, k) => {
  // create a graph first
  const adj = Array.from({ length: n }, () => []);
  for (const [source, destination, price] of flights) {
    adj[source].push([destination, price]);
  }

  // create a visited array to keep track of visited nodes
  const visited = Array(n).fill(Infinity);
  visited[src] = 0;

  const queue = [[0, src, 0]]; // [stops, src, price]

  while (queue.length > 0) {
    const [stops, city, cost] = queue.shift();

    if (stops > k) continue; // skip if stops excceded

    for (const [nextCity, price] of adj[city]) {
      const newCost = cost + price;

      // update current cost if new cost if minimum
      if (newCost < visited[nextCity] && stops <= k) {
        visited[nextCity] = newCost;
        queue.push([stops + 1, nextCity, newCost]);
      }
    }
  }

  return visited[dst] === Infinity ? -1 : visited[dst];
};

// Time Complexity: O(n + E)
// Space Complexity: O(n + E)

const flights = [
  [0, 1, 100],
  [1, 2, 100],
  [2, 0, 100],
  [1, 3, 600],
  [2, 3, 200],
];
const src = 0;
const dst = 3;
const n = 4;
const k = 1;
console.log(findCheapestFlight(n, flights, src, dst, k)); // Output: 700

// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
// Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
