const mongoose = require("mongoose");

const clearCollections = async () => {
  await mongoose.connection.dropDatabase();
};

module.exports = clearCollections;
