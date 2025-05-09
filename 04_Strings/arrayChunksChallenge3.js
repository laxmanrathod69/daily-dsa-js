// Array chuck size
const chunk = (array, size) => {
  let chunked = [];
  let index = 0;

  while (index < array.length) {
    let chunk = array.slice(index, index + size);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5], 3));
