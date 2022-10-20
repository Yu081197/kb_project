const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://ec2-52-194-242-9.ap-northeast-1.compute.amazonaws.com:8080",
      changeOrigin: true,
    })
  );
};
