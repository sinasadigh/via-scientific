module.exports = function (app) {
  app.use(
    "/api",
    (req, res, next) => {
      console.log(`${req.method} ${req.originalUrl} from ${req.ip}`);
      next();
    },
    require("../helper/router/index")
  );
};
