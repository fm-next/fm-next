/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'none',
  semi: false,
  useTabs: false,
  parser: 'typescript'
}
