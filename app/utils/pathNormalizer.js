const upath = require("upath");
module.exports = function (p) {
  return upath.normalize(p);
};
