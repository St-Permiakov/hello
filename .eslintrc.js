module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: ['node_modules/*', '.eslintrc.js', 'webpack.config.js'],
    rules: {
        '@typescript-eslint/no-explicit-any': 0,
        'react/jsx-filename-extension': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-props-no-spreading': 0,
        'import/prefer-default-export': 0,
        'react/prop-types': 0,
        'no-unused-vars': 0,
        'jsx-a11y/anchor-is-valid': 0,
        '@typescript-eslint/no-unused-vars': ['error', {"ignoreRestSiblings": true}],
    }
}
