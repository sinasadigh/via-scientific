const mongoose = require("mongoose");
const config = require("config");
let mongooseHidden = require("mongoose-hidden")({ defaultHidden: {} });
mongoose.plugin(mongooseHidden);
module.exports = async function () {
  const db = config.get("db");
  await mongoose.connect(db, {}).then(() => console.info(`Connected to ${db}`));
};
