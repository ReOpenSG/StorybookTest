module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/button-has-type': 'off',
    "import/prefer-default-export": "off",
    'import/noextraneous-dependencies': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['htmlFor'],
      },
    ],
  },
};
