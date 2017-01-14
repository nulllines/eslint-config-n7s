'use strict';

module.exports = {
    extends: 'eslint:recommended',
    env: {
        browser: false,
        commonjs: true,
        es6: true,
        node: true
    },
    globals: {
        stackbin: true
    },
    rules: {
        'comma-dangle': [
            'error',
            'never'
        ],
        'lines-around-comment': [
            'error',
            {
                beforeLineComment: true,
                allowObjectStart: true,
                allowBlockStart: true
            }
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'no-bitwise': 'error',
        curly: [
            'error',
            'all'
        ],
        eqeqeq: 'error',
        'guard-for-in': 'error',
        'wrap-iife': 'error',
        'no-caller': 'error',
        'no-new': 'error',
        strict: [
            'error',
            'safe'
        ],
        'no-use-before-define': [
            'error',
            {
                functions: false
            }
        ],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never'
            }
        ],
        'func-call-spacing': ['error', 'never'],
        'array-bracket-spacing': [
            'error',
            'never',
            {}
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'quote-props': [
            'error',
            'as-needed'
        ],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'space-unary-ops': [
            'error',
            {
                words: false,
                nonwords: false
            }
        ],
        'no-mixed-spaces-and-tabs': 'error',
        'no-trailing-spaces': 'error',
        yoda: [
            'error',
            'never'
        ],
        'no-with': 'error',
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true
            }
        ],
        'no-multiple-empty-lines': 'error',
        'no-multi-str': 'error',
        'one-var': [
            'error',
            'never'
        ],
        'space-before-blocks': [
            'error',
            'always'
        ],
        'comma-style': [
            'error',
            'last'
        ],
        'space-infix-ops': 'error',
        'eol-last': 'error',
        'dot-notation': 'error',
        'keyword-spacing': [
            'error'
        ]
    }
};