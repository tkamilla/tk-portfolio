// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/scss/variables.sass";
        @import "@/scss/mixins.sass";
        @import "@/scss/functions.sass";
        
        `,
      },
      scss: {
        additionalData: `
        @import "@/scss/variables.scss";
        @import "@/scss/mixins.scss";
        @import "@/scss/functions.scss";
        
        `,
      },
    },
  },
};
