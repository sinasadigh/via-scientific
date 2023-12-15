const Service = require("../../helper/service/index");
const { Gene } = require("../../helper/mongo/models");
const {
  calculateMean,
  calculateMedian,
  calculateVariance,
  detectAnomalies,
} = require("../../utils/math");

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
      const anomalies = detectAnomalies(expressionData);
      
      return { mean, median, variance, anomalies };
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
}
module.exports = new GeneService();
