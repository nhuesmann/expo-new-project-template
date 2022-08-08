module.exports = {
  // Order is important - each subsequent extension overwrites the previous
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb',
    'airbnb/hooks',
    'universe/native',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    // ? Needed for simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    // ? Allows ESLint & Prettier autofix on save. This is the source for Prettier rules for this project
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: false,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
    // ? Overrides Airbnb rules
    'jsx-a11y/accessible-emoji': 'off',
    'no-use-before-define': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/state-in-constructor': 'off',
    'react/style-prop-object': ['error', { allow: ['StatusBar'] }],
    // ? Custom TypeScript Rules
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_[0-9]?' },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    // ? Additional Rules
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-await-in-loop': 'off',
    'no-control-regex': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'], // Used for easy-peasy
      },
    ],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_[0-9]?' }],
    'object-curly-newline': [
      'error',
      { ImportDeclaration: { consistent: true } },
    ],
    'prefer-destructuring': 'off',
    'prefer-promise-reject-errors': 'off',
  },
};
