module.exports = {
  plugins: ["mocha"],
  rules: {
    "mocha/valid-suite-description": ["error", "^[A-Z/]"],
    "mocha/prefer-arrow-callback": "error",
    "mocha/no-skipped-tests": "error",
    "mocha/no-sibling-hooks": "error",
    "mocha/no-return-and-callback": "error",
    "mocha/no-pending-tests": "error",
    "mocha/no-nested-tests": "error",
    "mocha/no-mocha-arrows": "off",
    "mocha/no-identical-title": "error",
    "mocha/no-global-tests": "error",
    "mocha/no-exports": "error",
    "mocha/no-exclusive-tests": "error",
    "mocha/no-async-describe": "error",
    "mocha/max-top-level-suites": ["error", { limit: 1 }],
    "mocha/handle-done-callback": "error",
  }
}