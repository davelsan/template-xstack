/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'no-void': 'off',

    'prettier/prettier': 'off',

    export: 'off',
    'import/order': 'off',
    'simple-import-sort/exports': 'warn',
  },
};
