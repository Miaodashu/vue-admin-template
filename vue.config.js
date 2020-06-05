"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
console.log(process.env.VUE_APP_BASE_API);

module.exports = {
  publicPath: "/",
  outputDir: "dist", // 打包构建后生成的文件夹名称
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "************",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack(config) {
    config.plugins.delete("preload"); // TODO: need test
    config.plugins.delete("prefetch"); // TODO: need test

    // set preserveWhitespace
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();
    config.module
      .rule("vue")
      .use("iview-loader") // 解决ivew组件 忽略前缀i的问题
      .loader("iview-loader")
      .options({
        prefix: false,
      })
      .end();
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );
  },
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "src/assets/style/variables.less"), // 需要全局导入的less
      ],
    });
}
