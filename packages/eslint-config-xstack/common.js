/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'prettier/prettier': 'off',
    import: 'off',
    export: 'off',
    'simple-import-sort/exports': 'warn',
  },
};
