const Validator = require("../../helper/validator/index");
const { Gene } = require("../../helper/mongo/models");
const { check, body, param, query, matchedData } = require("express-validator");
const errors = require("../../enums/errors");
const nouns = require("../../enums/nouns");
class GeneValidator extends Validator {
  create() {
    return [
      body("genes")
        .exists()
        .withMessage(errors.FILL_REQUIRED_FIELD("genes"))
        .isArray()
        .withMessage(errors.SHOULD_BE_ARRAY("genes"))
        .custom(async (value) => {
          const geneIDMap = {};
          for (const item of value) {
            const geneID = item.geneID;

            if (geneIDMap[geneID]) {
              throw new Error(
                errors.DUPLICATED_IN_LOCAL_ARRAY(nouns.GENE_ID, geneID)
              );
            }

            geneIDMap[geneID] = true;
          }
          const geneIDs = value.map((item) => item.geneID);
          const duplicatesInDatabase = await Gene.find({
            geneID: { $in: geneIDs },
          });

          if (duplicatesInDatabase.length > 0) {
            const duplicateIDs = duplicatesInDatabase.map((doc) => doc.geneID);
            throw new Error(
              errors.DUPLICATED_IN_DATABASE(
                nouns.GENE_ID,
                duplicateIDs.join(", ")
              )
            );
          }
          return true;
        }),

      body("genes.*.geneID")
        .exists()
        .withMessage(errors.FILL_REQUIRED_FIELD(nouns.GENE_ID))
        .bail()
        .isLength({ min: 2, max: 30 })
        .withMessage(
          errors.LEAST_X_CHARACTERS_AND_MAX_Y_CHARACTERS(nouns.GENE_ID, 2, 30)
        ),
      body("genes.*.transcript")
        .exists()
        .withMessage(errors.FILL_REQUIRED_FIELD(nouns.TRANSCRIPT)),
      body("genes.*.experRep")
        .exists()
        .withMessage(errors.FILL_REQUIRED_FIELD(nouns.EXPER_REP))
        .isArray()
        .withMessage(errors.SHOULD_BE_ARRAY(nouns.EXPER_REP))
        .custom((value) => {
          if (value.length !== 3)
            throw new Error(errors.X_ITEMS(nouns.EXPER_REP, 3));
          return true;
        }),
      body("genes.*.experRep.*")
        .exists()
        .withMessage(errors.FILL_REQUIRED_FIELD(nouns.EXPER_REP))
        .isNumeric()
        .withMessage(errors.SHOULD_BE_INTEGER(nouns.EXPER_REP)),
      body("genes.*.controlRep")
        .exists()
        .withMessage(errors.FILL_REQUIRED_FIELD(nouns.CONTROL_REP))
        .isArray()
        .withMessage(errors.SHOULD_BE_ARRAY(nouns.CONTROL_REP))
        .custom((value) => {
          if (value.length !== 3)
            throw new Error(errors.X_ITEMS(nouns.CONTROL_REP, 3));
          return true;
        }),

      body("genes.*.controlRep.*")
        .exists()
        .withMessage(errors.FILL_REQUIRED_FIELD(nouns.CONTROL_REP))
        .isNumeric()
        .withMessage(errors.SHOULD_BE_INTEGER(nouns.CONTROL_REP)),
    ];
  }
  checkId() {
    return [
      param("id")
        .exists()
        .withMessage(errors.FILL_REQUIRED_FIELD("id"))
        .custom(async (value) => {
          const gene = await Gene.exists({ geneID: value });
          if (!gene) throw new Error(errors.NOT_FOUND(nouns.GENE));
          return true;
        }),
    ];
  }
}

module.exports = new GeneValidator();
