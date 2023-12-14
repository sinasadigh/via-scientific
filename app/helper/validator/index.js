const autoBind = require("auto-bind");
const mongoose = require("mongoose");
const models = require("../../helper/mongo/models");
module.exports = class validator {
  constructor() {
    autoBind(this);
    this.mongoose = mongoose;
    this.models = models;
  }
};
