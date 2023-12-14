const pluralize = require("pluralize");

module.exports = {
  pluralize(input) {
    return pluralize.plural(input);
  },
  singularize(input) {
    return pluralize.singular(input);
  },
};
