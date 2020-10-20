const {
  createProxyMiddleware,
} = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      // target: "http://localhost:5000",
      target:
        "https://emaily2020oct.herokuapp.com",
    })
  );
};
