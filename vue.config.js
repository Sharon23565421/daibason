const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
});

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
           @import "./src/assets/scss/main.scss";
        `,
      },
    },
  },
};
