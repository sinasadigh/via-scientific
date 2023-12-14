const autoBind = require("auto-bind");

const models = require("../mongo/models");
const mongoose = require("mongoose");
module.exports = class Service {
  constructor() {
    autoBind(this);
    this.models = models;
    this.mongoose = mongoose;
  }
};
