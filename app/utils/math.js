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
const calculateStandardDeviation = (arr) => {
  const mean = calculateMean(arr);
  const squaredDifferences = arr.map((val) => Math.pow(val - mean, 2));
  const variance =
    squaredDifferences.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(variance);
};

const detectAnomalies = (data) => {
  const mean = calculateMean(data);
  const standardDeviation = calculateStandardDeviation(data);

  const threshold = 3 * standardDeviation;

  const anomalies = data.filter((val) => Math.abs(val - mean) > threshold);

  return anomalies;
};
module.exports = {
  calculateMean,
  calculateMedian,
  calculateVariance,
  detectAnomalies,
};
