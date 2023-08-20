const downCaseBooleanPrefixes = ["is", "should", "has", "can", "did", "will"]
// Concat upper case prefixed with '_' like 'IS_' | 'SHOULD_'
const upperCaseBooleanPrefixes = downCaseBooleanPrefixes.map(
  (prefix) => prefix.toUpperCase() + "_",
)
const booleanPrefixes = [
  ...downCaseBooleanPrefixes,
  ...upperCaseBooleanPrefixes,
]

module.exports = {
  "unused-imports/no-unused-imports": "error",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-misused-promises": "off",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "variable",
      types: ["boolean"],
      format: ["PascalCase", "UPPER_CASE"],
      prefix: booleanPrefixes,
    },
    {
      selector: "interface",
      format: ["PascalCase"],
      prefix: ["I"],
    },
    {
      selector: "typeAlias",
      format: ["PascalCase"],
      suffix: ["Type"],
    },
  ],
  "no-console": ["warn"],
}
