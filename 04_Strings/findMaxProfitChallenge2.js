// Imagine you're buying and selling the stocks throughout the year. Your job is to find the biggest profit you could make by buying low stock and selling high only once.
const maxProfit = (prices) => {
  let maxProfit = 0; // Assume the max profit is zero`
  let minPrice = prices[0]; // Assume the first day is the cheapest to buy

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    minPrice = Math.min(currentPrice, minPrice);

    const potentialPrice = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialPrice);
  }

  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(`Max Profit: ${maxProfit(prices)}`);
