//express validator validate middleware

const { validationResult } = require("express-validator");

const status = require("../enums/status");
const returnResponse = require("../utils/responseFactory");

const validate = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  validationErrors
    .array()
    .map((err) => extractedErrors.push({ message: err.msg, field: err.param }));
  return returnResponse(
    res,
    status.VALIDATION_ERROR,
    null,
    extractedErrors,
    null
  );
};

module.exports = { validate };
