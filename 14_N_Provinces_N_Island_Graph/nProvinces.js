// LeetCode: 547. Number of Provinces
const findCircleNum = (isConnected) => {
  const visited = new Set(); // Unique object set
  let provinces = 0;
  const dfs = (city) => {
    visited.add(city);
    for (let neighbour = 0; neighbour < isConnected.length; neighbour++) {
      if (isConnected[city][neighbour] === 1 && !visited.has(neighbour)) {
        dfs(neighbour);
      }
    }
  };
  for (let city = 0; city < isConnected.length; city++) {
    if (!visited.has(city)) {
      provinces++;
      dfs(city);
    }
  }
  return provinces;
};

const isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

console.log(findCircleNum(isConnected)); // Output: 2
