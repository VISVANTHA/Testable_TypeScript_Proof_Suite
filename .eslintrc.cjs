module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: 2022, sourceType: "module" },
  plugins: ["@typescript-eslint", "sonarjs", "security"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended"
  ],
  env: { node: true, es2022: true },
  ignorePatterns: ["dist/", "node_modules/", "coverage/", ".stryker-tmp/"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "sonarjs/no-identical-expressions": "error",
    "security/detect-eval-with-expression": "error",
    "security/detect-child-process": "warn",
    "security/detect-non-literal-fs-filename": "off",
    "security/detect-object-injection": "off"
  }
};
