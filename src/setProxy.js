const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    "/dapi",
    createProxyMiddleware({
      target: "http://192.168.0.18:8000",
      changeOrigin: true,
    })
  );
};
