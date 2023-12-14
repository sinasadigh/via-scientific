const str = require("./str");
const _ = require("lodash");

function returnResponse(res, status, message, error, data) {
  let resObject = {
    status: status.title,
    statusCode: status.code,
    message: sanitizeMessage(message),
    errors: sanitizeErrors(error),
    data: sanitizeData(data),
  };
  return res.status(status.httpCode).json(resObject);
}

function sanitizeMessage(message) {
  if (!message) {
    return {
      text: "",
      type: "",
    };
  }
  message.length < 2 && (message = message[0]);
  return Array.isArray(message)
    ? message.map((m) => {
        return {
          type: m.type,
          text: _.upperFirst(str.addDotAtTheEnd(m.text.trim())),
        };
      })
    : {
        type: message.type,
        text: _.upperFirst(str.addDotAtTheEnd(message.text.trim())),
      };
}
function sanitizeErrors(error) {
  if (!error) {
    return [];
  }
  if (Array.isArray(error)) {
    return error.map((e) => {
      if (e.message) {
        e.message = _.upperFirst(str.addDotAtTheEnd(e.message));
        return e;
      } else {
        return _.upperFirst(str.addDotAtTheEnd(e));
      }
    });
  } else {
    if (error.message) {
      error.message = _.upperFirst(str.addDotAtTheEnd(error.message));
      return [_.upperFirst(error)];
    }
    return [_.upperFirst(str.addDotAtTheEnd(error))];
  }
}
function sanitizeData(data) {
  if (!data) {
    data = {};
  }
  return data;
}

module.exports = returnResponse;
