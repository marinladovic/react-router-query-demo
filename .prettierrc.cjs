module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  semi: true,
  printWidth: 100,
  proseWrap: 'always',
  tabWidth: 2,
  trailingComma: 'none',
  bracketSpacing: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  pluginSearchDirs: false
};
