module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
  plugins: ["prettier"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true,
      },
    ],
    trailingComma: "none",
  },
};
