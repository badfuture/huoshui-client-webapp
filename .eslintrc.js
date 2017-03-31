module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "import"
  ],
  "rules": {
    semi: ['error', 'never'],
    quotes: ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }]
  }
};
