module.exports = {
  env: {
    browser: true,
    es2023: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
