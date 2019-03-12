"use strict";

module.exports = {
    "env": {
        "es6": true
    },
    "plugins": ["jsdoc", "json"],
    "rules": {
        "no-catch-shadow": "error",
        "no-confusing-arrow": "error",
        "no-duplicate-imports": "error",
        "no-implicit-coercion": "off",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-mixed-requires": "error",
        "no-multi-spaces": "off",
        "no-multiple-empty-lines": [
            "error",
            { "max": 2 }
        ],
        "no-native-reassign": "error",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "error",
        "no-path-concat": "error",
        "no-spaced-func": "error",
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "no-unused-vars": [
            "error",
            { "args": "none" }
        ],
        "no-use-before-define": [
            "error",
            { "classes": false }
        ],
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "array-bracket-spacing": "off",
        "array-callback-return": "error",
        "arrow-parens": [
            "error",
            "as-needed",
            { "requireForBlockBody": true }
        ],
        "arrow-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "accessor-pairs": "error",
        "block-scoped-var": "error",
        "camelcase": [
            "error",
            {
                "properties": "never"
            }
        ],
        "comma-dangle": [
            "error",
            "only-multiline"
        ],
        "comma-spacing": "off",
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "consistent-this": "error",
        "default-case": "error",
        "dot-notation": [
            "error",
            {
                "allowKeywords": true
            }
        ],
        "func-style": [
            "error",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "generator-star-spacing": "error",
        "guard-for-in": "error",
        "handle-callback-err": "error",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
                "MemberExpression": "off"
            }
        ],
        "jsx-quotes": "error",
        "key-spacing": "off",
        "lines-around-directive": "error",
        "max-len": [
            "error",
            {
                "code": 100,
                "ignoreUrls": true
            }
        ],
        "max-nested-callbacks": "error",
        "multiline-ternary": [
            "error",
            "never"
        ],
        "object-property-newline": [
            "error",
            {
                "allowMultiplePropertiesPerLine": true
            }
        ],
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "one-var-declaration-per-line": "error",
        "operator-assignment": [
            "error",
            "always"
        ],
        "operator-linebreak": "off",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-template": "error",
        "quote-props": "off",
        "quotes": "off",
        "radix": [
            "error",
            "always"
        ],
        "rest-spread-spacing": "error",
        "sort-imports": "error",
        "sort-vars": "error",
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "spaced-comment": [
            "error",
            "always"
        ],
        "strict": "error",
        "symbol-description": "error",
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "valid-jsdoc": "off",
        "yield-star-spacing": "error",

        // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules
        "jsdoc/check-param-names": "warn",
        "jsdoc/check-tag-names": "warn",
        "jsdoc/check-types": "warn",
        "jsdoc/newline-after-description": ["warn", "never"],
        "jsdoc/require-param-type": "warn",
        "jsdoc/require-returns-type": "warn"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "globalReturn": true
        }
    },
    "extends": [
        "wikimedia",
        "wikimedia/node"
    ],
    "settings": {
        // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-settings-alias-preference
        "jsdoc": {
            // one synonym for each ambiguity listed: http://usejsdoc.org/#block-tags
            "tagNamePreference": {
                abstract: "virtual",
                arg: "param",
                argument: "param",
                augments: "extends",
                constructor: "class",
                constant: "const",
                defaultvalue: "default",
                description: "desc",
                host: "external",
                fileoverview: "file",
                overview: "file",
                fires: "emits",
                function: "func",
                method: "func",
                member: "var",
                property: "prop",
                returns: "return",
                exception: "throws",
                linkcode: "link",
                linkplain: "link"
            }
        }
    }
};
