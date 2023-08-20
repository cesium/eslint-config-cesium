const base = require("./lib/base")
const react = require("./lib/react")
const prettier = require("./lib/prettier")
const tailwind = require("./lib/tailwind")

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },

  plugins: ["@typescript-eslint", "react", "unused-imports"],
  rules: {
    ...base,
    ...react,
    ...prettier,
    ...tailwind,
  },

  settings: {
    react: {
      version: "detect",
    },
  },
}
