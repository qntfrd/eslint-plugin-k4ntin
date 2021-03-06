module.exports = {
  rules: {
    "valid-typeof": ["error", { requireStringLiterals: true }],
    "use-isnan":    ["error", { enforceForSwitchCase: true }],
    "require-atomic-updates": "error",
    "no-useless-backreference": "error",
    "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
    "no-unsafe-negation": ["error", {enforceForOrderingRelations: true }],
    "no-unsafe-finally": "error",
    "no-unreachable-loop": "error",
    "no-unreachable": "error",
    "no-unexpected-multiline": "error",
    "no-template-curly-in-string": "error",
    "no-sparse-arrays": "error",
    "no-setter-return": "error",
    "no-regex-spaces": "error",
    "no-prototype-builtins": "error",
    "no-promise-executor-return": "error",
    "no-obj-calls": "error",
    "no-misleading-character-class": "error",
    "no-loss-of-precision": "error",
    "no-irregular-whitespace": ["error", { skipStrings: false, skipComments: false, skipRegExps: false, skipTemplates: false }],
    "no-invalid-regexp": "error",
    "no-inner-declarations": "error",
    "no-import-assign": "error",
    "no-func-assign": "error",
    "no-extra-semi": "error",
    "no-extra-boolean-cast": ["error", { enforceForLogicalOperands: true }],
    "no-ex-assign": "error",
    "no-empty-character-class": "error",
    "no-empty": "error",
    "no-duplicate-case": "error",
    "no-dupe-keys": "error",
    "no-dupe-else-if": "error",
    "no-dupe-args": "error",
    "no-debugger": "error",
    "no-control-regex": "error",
    "no-constant-condition": "error",
    "no-console": "error",
    "no-cond-assign": "error",
    "no-compare-neg-zero": "error",
    "no-await-in-loop": "error",
    "no-async-promise-executor": "error",
    "getter-return": "error",
    "for-direction": "error",
    "no-extra-parens": ["error", "all"],
  }
}