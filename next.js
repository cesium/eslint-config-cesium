const base = require("./lib/base")
const react = require("./lib/react")
const prettier = require("./lib/prettier")
const tailwind = require("./lib/tailwind")

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
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
  plugins: ["@typescript-eslint", "react", "unused-imports"],

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],

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
