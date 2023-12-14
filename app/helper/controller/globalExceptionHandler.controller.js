const status = require("../../enums/status");
const errors = require("../../enums/errors");
const moment = require("moment");
const errorNames = require("../../enums/errorNames.enum");
const nouns = require("../../enums/nouns");
const returnResponse = require("../../utils/responseFactory");

module.exports = {
  handleException(err, req, res, next) {
    if (err.custom) {
      return returnResponse(res, err.status, null, [err.message], null);
    } else {
      if (err.name == "SyntaxError") {
        return returnResponse(
          res,
          status.INVALID_JSON,
          null,
          [errors.INVALID_JSON],
          null
        );
      } else if (err.name === errorNames.PROTECTED_RESOURCE) {
        return returnResponse(
          res,
          status.BAD_REQUEST,
          null,
          [err.message],
          null
        );
      } else if (err.name == "MulterError") {
        switch (err.code) {
          case "LIMIT_FILE_SIZE":
            err.message = errors.LARGE_IMAGE;
            break;
          case errorNames.INVALID_IMAGE_FORMAT:
            err.message = errors.INVALID(nouns.IMAGE_FORMAT);
            break;
          case errorNames.INVALID_VIDEO_FORMAT:
            err.message = errors.INVALID(nouns.VIDEO_FORMAT);
            break;
          case errorNames.INVALID_FILE_FORMAT:
            err.message = errors.INVALID(nouns.FILE_FORMAT);
            break;
          default:
            err.message = errors.MULTER_FILE_UPLOAD_ERROR;
            break;
        }
        return returnResponse(
          res,
          status.VALIDATION_ERROR,
          null,
          [err.message],
          null
        );
      } else if (err.name == "CastError") {
        return returnResponse(
          res,
          status.VALIDATION_ERROR,
          null,
          errors.CAST_ERROR,
          null
        );
      } else {
        console.log(err);
        console.log(err.custom);
        returnResponse(
          res,
          status.INTERNAL_SERVER_ERROR,
          null,
          [errors.INTERNAL_SERVER_ERROR],
          {
            errMSG: err.message,
            time: moment().unix(),
          }
        );
        throw err;
      }
    }
  },
};
