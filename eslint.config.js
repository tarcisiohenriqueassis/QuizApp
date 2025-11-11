module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-native/all", "expo"],
  plugins: ["react", "react-native"],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    // suas regras personalizadas aqui
  },
};
