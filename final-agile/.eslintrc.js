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
        'prefer-const': 'off',
        'no-unused-expressions': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'no-restricted-syntax': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react/jsx-curly-brace-presence': 0,
        'react/jsx-boolean-value': ['off'],
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
