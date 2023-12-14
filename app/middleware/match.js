// express validator matchedData middleware

const { matchedData } = require("express-validator");

module.exports = (req, res, next) => {
  req.body = matchedData(req, {
    locations: ["body"],
    includeOptionals: true,
    onlyValidData: true,
  });
  req.params = matchedData(req, {
    locations: ["params"],
    includeOptionals: true,
    onlyValidData: true,
  });
  req.query = matchedData(req, {
    locations: ["query"],
    includeOptionals: true,
    onlyValidData: true,
  });
  //removing undefined data from body
  removeUndefineRecursively(req.body);
  next();
};

function removeUndefineRecursively(item) {
  Object.keys(item).forEach((key) => {
    if (typeof item[key] === "object") {
      removeUndefineRecursively(item[key]);
    }
    item[key] === undefined && delete item[key];
  });
}
