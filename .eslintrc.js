// THIS FILE IS FOR LINTING THIS PROJECT FILES ONLY

module.exports = {
  parserOptions: {
    sourceType: "script",
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:n/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
        semi: true,
        endOfLine: "auto",
      },
    ],
    "eslint-plugin/require-meta-docs-description": "error",
  },
};
