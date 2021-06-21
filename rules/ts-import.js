module.exports = {
  plugins: ["import"],
  extends: "plugin:import/typescript",
  rules: {
    "import/extensions": ["error", { extensions: "never" }],
  }
}