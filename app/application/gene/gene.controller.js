const Controller = require("../../helper/controller/index");
const { OK } = require("../../enums/status");
const messages = require("../../enums/messages");
const { GeneService } = require("../../helper/service/services");
const returnResponse = require("../../utils/responseFactory");
const nouns = require("../../enums/nouns");

class GeneController extends Controller {
  async create(req, res, next) {
    try {
      let result = await GeneService.retrieveData(null);
      return returnResponse(res, OK, null, null, result);
    } catch (error) {
      next(error);
    }
  }
  async getManyGenes(req, res, next) {
    try {
      let data = await GeneService.getManyGenes();
      return returnResponse(res, OK, null, null, data);
    } catch (error) {
      next(error);
    }
  }
  async getOneGene(req, res, next) {
    try {
      const { id } = req.params;
      let data = await GeneService.getOneGene(id);
      return returnResponse(res, OK, null, null, data);
    } catch (error) {
      next(error);
    }
  }
  async getGeneAnalytics(req, res, next) {
    try {
      const { id } = req.params;
      let data = await GeneService.getGeneAnalytics(id);
      return returnResponse(res, OK, null, null, data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let result = await GeneService.createGene(req.body.genes);
      return returnResponse(
        res,
        OK,
        messages.DATA_SUBMITTED_SUCCESSFULLY(nouns.GENE),
        null,
        result
      );
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new GeneController();
