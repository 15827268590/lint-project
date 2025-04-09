module.exports = {
  plugins: ['eslint-plugin-cchaos'],
  rules: {
    'eslint-plugin-cchaos/no-http-url': 'warn',
    'eslint-plugin-cchaos/no-secret-info': 'error',
  },
};
