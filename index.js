module.exports = {
  configs: {
    ts: {
      env: {
        es2021: true,
        node: true,
      },
      extends: [
        "./rules/errors",
        "./rules/bestpractices",
        "./rules/variables",
        "./rules/style",
        "./rules/es6",
        "./rules/jsdoc",
        "./rules/mocha",
        "./rules/ts-import",
        "./rules/typescript",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
      },
    }
  }
}