/**
 * @author Sina Sadigh //15/12/2023
 * @description a method to calculate mean
 * @param {array} data data to calculate mean which is an array of numbers
 */
const calculateMean = (data) => {
  const sum = data.reduce((acc, value) => acc + value, 0);
  return sum / data.length;
};

/**
 * @author Sina Sadigh //15/12/2023
 * @description a method to calculate median
 * @param {array} data data to calculate median which is an array of numbers
 */
const calculateMedian = (data) => {
  const sortedData = data.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedData.length / 2);
  if (sortedData.length % 2 === 0) {
    return (sortedData[middleIndex] + sortedData[middleIndex - 1]) / 2;
  }
  return sortedData[middleIndex];
};

/**
 * @author Sina Sadigh //15/12/2023
 * @description a method to calculate variance
 * @param {array} data data to calculate variance which is an array of numbers
 */
const calculateVariance = (data) => {
  const mean = calculateMean(data);
  const squaredDifferences = data.map((value) => Math.pow(value - mean, 2));
  const sumSquaredDifferences = squaredDifferences.reduce(
    (acc, value) => acc + value,
    0
  );
  return sumSquaredDifferences / data.length;
};

/**
 * @author Sina Sadigh //15/12/2023
 * @description Function to calculate the standard deviation of an array
 * @param {array} arr arr is an array of numbers to calculate standard deviation
 */
const calculateStandardDeviation = (arr) => {
  const mean = calculateMean(arr);
  const squaredDifferences = arr.map((val) => Math.pow(val - mean, 2));
  const variance =
    squaredDifferences.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(variance);
};

/**
 * @author Sina Sadigh //15/12/2023
 * @description a method to detect anomalies
 * @param {array} data data to detect anomalies which is an array of numbers
 */
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
