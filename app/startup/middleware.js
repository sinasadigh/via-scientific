const cors = require("cors");
const bodyParser = require("body-parser");
const trimmer = require("../middleware/trimmer");


module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(cors());
  app.use(trimmer.all);
};
