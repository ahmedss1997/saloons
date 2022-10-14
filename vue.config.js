module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true,
    host: "localhost",
    https: false,
    port: 8081,
    public: "http://0.0.0.0:8081",
  },
  publicPath: "/saloons/dist",
};
