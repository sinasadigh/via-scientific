const Service = require("../../helper/service/index");
const { Gene } = require("../../helper/mongo/models");
const {
  calculateMean,
  calculateMedian,
  calculateVariance,
} = require("../../utils/math");

// // Function to calculate the median
// const calculateMedian = (data) => {
//   const sortedData = data.slice().sort((a, b) => a - b);
//   const mid = Math.floor(sortedData.length / 2);

//   if (sortedData.length % 2 === 0) {
//     return (sortedData[mid - 1] + sortedData[mid]) / 2;
//   } else {
//     return sortedData[mid];
//   }
// };

// // Function to calculate the variance
// const calculateVariance = (data) => {
//   const mean = calculateMean(data);
//   const squaredDifferences = data.map((value) => Math.pow(value - mean, 2));
//   const sumSquaredDifferences = squaredDifferences.reduce(
//     (acc, value) => acc + value,
//     0
//   );
//   return sumSquaredDifferences / data.length;
// };

class GeneService extends Service {
  createGene = async (geneData) => {
    try {
      return await Gene.create(geneData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getManyGenes = async () => {
    try {
      return Gene.find({});
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getOneGene = async (geneID) => {
    try {
      return Gene.findOne({ geneID });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  getGeneAnalytics = async (geneID) => {
    try {
      const gene = await Gene.findOne({ geneID });
      const expressionData = gene.experRep;

      const mean = calculateMean(expressionData);
      const median = calculateMedian(expressionData);
      const variance = calculateVariance(expressionData);

      return { mean, median, variance };
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
module.exports = new GeneService();
