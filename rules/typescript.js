module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/unified-signatures": ["warn"],
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/typedef": ["error", {
      arrowParameter: true,
      memberVariableDeclaration: true,
      parameter: true,
    }],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/triple-slash-reference": ["error", { path: "never", types: "never", lib: "never"}],
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/sort-type-union-intersection-members": "off",
    "@typescript-eslint/restrict-template-expressions": ["error", { allowBoolean: true }],
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-literal-enum-member": ["error", { allowBitwiseExpressions: true }],
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-enum-initializers": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-this-alias": ["error", { allowedNames: ["self"] }],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-implicit-any-catch": "off",
    "@typescript-eslint/no-for-in-array": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-extraneous-class": ["error", { allowStaticOnly: true, allowWithDecorator: true }],
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "off",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/member-ordering": "off", // TODO
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: { delimiter: "none", requireLast: true },
      singleline: { delimiter: "comma", requireLast: false },
    }],
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "no-type-imports" }],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "as" }],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "index-signature"],
    "@typescript-eslint/class-literal-property-style": ["error", "fields"],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/naming-convention": ["error", {
      selector: "default",
      format: ["camelCase"],
      leadingUnderscore: "forbid",
      trailingUnderscore: "forbid"
    }, {
      selector: "class",
      format: ["PascalCase"],
    }, {
      selector: "typeAlias",
      format: ["PascalCase"],
    }, {
      selector: "class",
      modifiers: ["abstract"],
      format: ["PascalCase"],
      prefix: ["A"],
    }, {
      selector: "interface",
      format: ["PascalCase"],
      prefix: ["I"],
    }, {
      selector: "enum",
      format: ["PascalCase"],
      prefix: ["e"],
    }, {
      selector: "enumMember",
      format: ["UPPER_CASE"],
    }]
  }
}