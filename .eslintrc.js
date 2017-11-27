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
    quotes: ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    "react/prop-types": 0,
    "react/no-multi-comp": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-no-bind": 0,
    "no-console": 0,
    "import/prefer-default-export": 0,
    "no-unused-vars": 0,
    "no-plusplus": 0,
    "no-mixed-operators": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-static-element-interactions": 0
  }
};
