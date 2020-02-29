module.exports = {
  "root": true,
  "extends": [
    "airbnb",
    "prettier/react",
  ],
  "parser": "babel-eslint",
  "rules": {
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "object-curly-spacing": "error",
    "semi": 0,
    "comma-dangle": 0,
    "object-curly-newline": 0,
    "react/destructuring-assignment": 0,
    "jsx-quotes": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "import/prefer-default-export": 0,
    "indent": ["error", 2],
    "arrow-parens": 0,
    "no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "react/prefer-stateless-function": 0,
    "global-require": 0,
    "max-len": 0,
    "implicit-arrow-linebreak": 0,
    "react/prop-types": 0,
    "no-plusplus": 0,
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": 0,
    "no-confusing-arrow": 0,
    "no-await-in-loop": 0
  }
}
