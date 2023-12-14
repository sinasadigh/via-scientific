const mongoose = require("mongoose");
const config = require("config");
let mongooseHidden = require("mongoose-hidden")({ defaultHidden: {} });
mongoose.plugin(mongooseHidden);
module.exports = async function () {
  const db = "mongodb://mongodb:27017/omicsdb";
  await mongoose.connect(db, {}).then(() => console.info(`Connected to ${db}`));
};
