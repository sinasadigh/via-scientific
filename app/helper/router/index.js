const express = require("express");
const router = express.Router();
//routes
const {
  GeneRouter,
} = require("./routers");

const { OK } = require("../../enums/status");
const returnResponse = require("../../utils/responseFactory");

// address is =>  /api/...

router.use("/genes", GeneRouter);

router.get("/current-version", function mainHandler(req, res) {
  const { version } = require("../../../package.json");
  return returnResponse(res, OK, null, null, { version, coreVersion });
});

router.get("/", (req, res, next) => res.json({ index: "/" }));

module.exports = router;
