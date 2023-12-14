const express = require("express");
const router = express.Router();

const { GeneController } = require("../../helper/controller/controllers");
const { GeneValidator } = require("../../helper/validator/validators");
const { validate } = require("../../middleware/validate");
const match = require("../../middleware/match");

router
  .route("/")
  .post(GeneValidator.create(), validate, match, GeneController.create)
  .get(GeneController.getManyGenes);

router
  .route("/:id/analytics")
  .get(GeneValidator.checkId(), validate, GeneController.getGeneAnalytics);
router
  .route("/:id")
  .get(GeneValidator.checkId(), validate, GeneController.getOneGene);

module.exports = router;
