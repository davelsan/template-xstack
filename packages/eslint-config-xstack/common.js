/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@*/**',
            group: 'parent',
            position: 'before',
          },
        ],
        distinctGroup: true,
      },
    ],
  },
};
