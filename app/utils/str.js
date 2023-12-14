const pluralize = require("./pluralize");
const pascalcase = require("pascalcase");
const constantCase = require("constant-case").constantCase;
const _ = require("lodash");

module.exports = {
  toSnakeCase: (str) => {
    return _.snakeCase(str);
  },
  toPascalCase: (str) => {
    return pascalcase(str);
  },
  toUpper: (str) => {
    return _.upperCase(str);
  },
  toLower: (str) => {
    return _.lowerCase(str);
  },
  toConstantCase: (str) => {
    return constantCase(str);
  },
  toCamelCase: (str) => {
    return _.camelCase(str);
  },
  toSingular: (str) => {
    return pluralize.singularize(str);
  },
  toPlural: (str) => {
    return pluralize.pluralize(str);
  },
  toURLPath: (str) => {
    return pluralize.pluralize(_.kebabCase(str));
  },
  addDotAtTheEnd: (str) => {
    return typeof str !== "string" || str.endsWith(".") ? str : str + ".";
  },
};
