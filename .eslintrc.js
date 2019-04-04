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
    ecmaVersion: 9,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  }
};
