module.exports = {
    env: {
        browser: true,
        es2021: true,  // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
        node: true,
    },
    // parser: '@typescript-eslint/parser', // 指定要使用的解析器。我们指定为vue-eslint-parser即可
    parser: 'vue-eslint-parser', // 指定要使用的解析器。我们指定为vue-eslint-parser即可
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: "latest",  // 支持的es版本
        sourceType: 'module',  // 代模块类型，默认为script，使用es6 module设置为module
    },
    extends: [
        'plugin:vue/vue3-recommended',
        // 'plugin:@typescript-eslint/recommended'
    ],
    // plugins: ['@typescript-eslint'],
    rules: {
        // 禁止出现未使用过的变量
        'no-unused-vars': 'error',
        // 缩进使用 4 个空格，并且 switch 语句中的 Case 需要缩进
        // https://eslint.org/docs/rules/indent
        'indent': ['error', 4, {
            'SwitchCase': 1,
            'flatTernaryExpressions': true
        }],
        // 只有一个参数时，箭头函数体可以省略圆括号
        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': 'off',
        // '@typescript-eslint/rule-name': 'error',
    },
    overrides: [        
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
        },
        // {
        //     files: ['*.vue'],
        //     parser: 'vue-eslint-parser',
        //     extends: ['plugin:plugin:vue/vue3-recommended'],
        // },
    ],
}