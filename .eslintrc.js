module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: true
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none"
      }
    ]
  }
};
