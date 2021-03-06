module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prefer-const': 0,
    'n0-console': 1,
  },
};
