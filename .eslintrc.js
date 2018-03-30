module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
  },
  rules: {
    'react/no-unused-state': 0,
    'react/forbid-prop-types': 0,
    'no-mixed-operators': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/prop-types': 1,
    'react/jsx-filename-extension': 0,
    'no-console': 0,
  },
};
