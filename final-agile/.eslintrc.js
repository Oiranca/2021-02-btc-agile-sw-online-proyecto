// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:react/recommended",
//         "plugin:@typescript-eslint/recommended"
//     ],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//         "ecmaFeatures": {
//             "jsx": true
//         },
//         "ecmaVersion": 12,
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react",
//         "@typescript-eslint"
//     ],
//     "rules": {
//     }
// };
module.exports = {
    // For commons project (.ts and .tsx files)
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                project: `${__dirname}/tsconfig.json`
            }
        }
    },
    overrides: [
        {
            files: ['src/**/*.ts?(x)'],
            excludedFiles: ['src/react-app-env.d.ts'],
            extends: ['plugin:@typescript-eslint/recommended', 'airbnb-typescript-prettier'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname
            },
            rules: {
                'no-param-reassign': 'off',
                'react/require-default-props': 'off',
                'react/jsx-props-no-spreading': ['off'],
                'no-use-before-define': ['off'],
                '@typescript-eslint/no-use-before-define': ['error'],
                '@typescript-eslint/explicit-function-return-type': ['off'],
                '@typescript-eslint/explicit-module-boundary-types': ['off'],
                'import/prefer-default-export': ['off'],
                'react/jsx-filename-extension': [
                    1,
                    {
                        extensions: ['.ts', '.tsx']
                    }
                ],
                'no-shadow': ['off']
            }
        },
        {
            files: ['src/**/routing/**/*.ts?(x)'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'off'
            }
        }
    ]
};
