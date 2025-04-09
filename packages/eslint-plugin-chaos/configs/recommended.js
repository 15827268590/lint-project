module.exports = {
  plugins: ["eslint-plugin-chaos"],
  rules: {
    "eslint-plugin-chaos/no-http-url": "warn",
    "eslint-plugin-chaos/no-secret-info": "error",
  },
};
