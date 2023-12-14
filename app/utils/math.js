const calculateMean = (data) => {
  const sum = data.reduce((acc, value) => acc + value, 0);
  return sum / data.length;
};

const calculateMedian = (data) => {
  const sortedData = data.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedData.length / 2);
  if (sortedData.length % 2 === 0) {
    return (sortedData[middleIndex] + sortedData[middleIndex - 1]) / 2;
  }
  return sortedData[middleIndex];
};

const calculateVariance = (data) => {
  const mean = calculateMean(data);
  const squaredDifferences = data.map((value) => Math.pow(value - mean, 2));
  const sumSquaredDifferences = squaredDifferences.reduce(
    (acc, value) => acc + value,
    0
  );
  return sumSquaredDifferences / data.length;
};
module.exports = {
  calculateMean,
  calculateMedian,
  calculateVariance,
};
