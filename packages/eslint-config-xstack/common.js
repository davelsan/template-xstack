/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    // Opinionated import sorting
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
    // Support react-three/fiber properties
    'react/no-unknown-property': 'off',
    // Support declaring a type and a variable with the same name
    '@typescript-eslint/no-redeclare': 'off',
  },
};
