module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'react',
    'prettier'
  ],
  extends: [
    'plugin:prettier/recommended'
  ],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  }
};
