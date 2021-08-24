const { defineConfig } = require("windicss/helpers");

module.exports = defineConfig({
  // preflight: false,
  // preflight: {
  //   includeAll: true,
  //   includeBase: true,
  //   includePlugin: true,
  //   includeGlobal: true,
  //   blocklist: ["input", "input[type=text]", "input[type=checkbox]"],
  //   safelist: ["input", "input[type=text]", "input[type=checkbox]"],
  // },

  extract: {
    include: ["index.html"],
  },
  plugins: [require("windicss/plugin/forms")],
});
