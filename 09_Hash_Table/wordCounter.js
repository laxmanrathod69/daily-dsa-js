// Count how many words are in a string
const wordCount = (text) => {
  const lowerCase = text.toLowerCase();
  const wordMap = {};
  const words = lowerCase.split(/\s+/);
  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }
  return wordMap;
};

const text = "I am a developer and i develop web applications";
console.log(wordCount(text));