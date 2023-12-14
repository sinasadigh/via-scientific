const errorNames = require("../../enums/errorNames.enum");
const errors = require("../../enums/errors");
const nouns = require("../../enums/nouns");

class ErrorService {
  throwProtectedResourceError(resourceName) {
    let error = new Error(errors.IS_PROTECTED(resourceName));
    error.name = errorNames.PROTECTED_RESOURCE;
    throw error;
  }
}

module.exports = new ErrorService();
