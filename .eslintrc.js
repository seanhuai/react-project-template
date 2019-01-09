module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": false
  },
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "jsx": true
  },
  "extends": "eslint:recommended",
  "rules": {
    // enable additional rules
    "indent": [1, 2],
    // "semi": [1, "always", {"omitLastInOneLineBlock": true}],

    // override default options for rules from base configurations
    "no-var": 1,
    "arrow-spacing": 1,
    "comma-dangle": 2,
    "no-use-before-define": 2,
    "no-unused-vars": 0,
    "no-multiple-empty-lines": 1,

    // disable rules from base configurations
    "no-console": 0,
  }
};