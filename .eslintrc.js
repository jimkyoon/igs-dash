module.exports = {
  extends: ['@youversion'],
  plugins: ['sort-keys-fix'],
  rules: {
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-file-overview': 'off',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
}