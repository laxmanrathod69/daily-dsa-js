/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) dist[i][i] = 0;
  for (const [from, to, wgt] of edges) {
    dist[from][to] = wgt;
    dist[to][from] = wgt;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] === Infinity || dist[k][j] === Infinity) continue;
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  let countCity = n;
  let cityNo = -1;

  for (let city = 0; city < n; city++) {
    let countCurrentCity = 0;
    for (let neighbourCity = 0; neighbourCity < n; neighbourCity++) {
      if (dist[city][neighbourCity] <= distanceThreshold) {
        countCurrentCity++;
      }
    }

    if (countCurrentCity <= countCity) {
      countCity = countCurrentCity;
      cityNo = city;
    }
  }

  return cityNo;
};
const edges = [
  [0, 1, 3],
  [1, 2, 1],
  [1, 3, 4],
  [2, 3, 1],
];
const distanceThreshold = 4;
const n = 4;
console.log(findTheCity(n, edges, distanceThreshold)); // Output: 3

/*Explanation: The figure above describes the graph. 
The neighboring cities at a distanceThreshold = 4 for each city are:
City 0 -> [City 1, City 2] 
City 1 -> [City 0, City 2, City 3] 
City 2 -> [City 0, City 1, City 3] 
City 3 -> [City 1, City 2] 
Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.*/
