/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['xstack/native'],
  ignorePatterns: ['./android', './ios'],
  rules: {
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Module imports
          ['^[a-z]', '^@'],
          // Folder aliases
          [
            '^@features',
            '^@helpers',
            '^@hooks',
            '^@state',
            '^@typography',
            '^@theme',
            '^@ui',
            '^@utils',
          ],
          // Folder imports (starting with `../` or `./`)
          [
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
          // Style and JSON imports
          ['^.+\\.s?(css|json)$'],
          // Side effect imports
          ['^\\u0000'],
        ],
      },
    ],
  },
};
