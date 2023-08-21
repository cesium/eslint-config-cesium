# ESLint + Prettier + Tailwind Config for Next.js

> Shareable config for [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [Tailwind](https://tailwindcss.com/), aimed primarily to be used in NextJS projects.

## Overview

This configuration extends some recommended ESLint config, Prettier and Tailwind integration via the ESLint [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss). Additionally, a few default rules are overriden to provide a more relaxed development experience in Next.js applications out of the box.

The goal of this configuration is to get code linting and formatting up and running as quickly as possible in a modern development environment, without sacrificing cleanliness and readability, and having to configure ESLint + Prettier from scratch every time.

## Installation

To install the package, run:

```shell
npm install --save-dev @cesiuminho/eslint-config
```

This will install the shared config

- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)


## Usage

To start using this shared config, add `@cesiuminho/eslint-config` to the `.eslintrc` file:

```jsx
// .eslintrc
{
  "extends": "@cesiuminho/eslint-config"
}
```

## Prettier

This config supports Prettier integration out of the box. Rules that may conflict with ESLint are disabled via recommended configuration in [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).

If you wish to override any [Prettier options](https://prettier.io/docs/en/options.html), you can do so by specifying them under `prettier/prettier` rule in your ESLint config file. For example:

```jsx
// .eslintrc
{
  "extends": "@cesiuminho/eslint-config",
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "semi": false
      }
    ]
  }
}
```

Make sure that these rules match the options specified in your `.prettierrc` file.

## Adding Scripts

Add the following to your `package.json` file to define a script that will lint all known files and output the results:

```jsx
// package.json
{
  "scripts": {
    "lint": "next lint"
  }
}
```

To fix all automatically-fixable issues, you can add the following script to your `package.json` as well (in addition to above):

```jsx
// package.json
{
  "scripts": {
    "lint:fix": "next lint --fix"
  }
}
```

Note that you can update the above scripts as you see fit, this is just an example. See ESLint [CLI reference](https://eslint.org/docs/user-guide/command-line-interface) for more details.

## Author

[CeSIUM](https://github.com/cesium)

## License

[MIT](https://choosealicense.com/licenses/mit/)