const getList = require('./get-list')
const lt100 = require('./lt100')

/**
 * Obter um número inteiro menor que mil por extenso.
 *
 * @function lt1000
 * @param {number} int Um número inteiro menor que mil.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} Número escrito por extenso.
 */
exports.default = (int, locale) => {
  if (int < 100) return lt100.default(int, locale)
  if (int === 100) return 'cem'

  const hundredInt = int - int % 100
  const restInt = int % 100
  const hundred = getList.listLt1000(locale)[hundredInt / 100 - 1]
  const rest = lt100.default(restInt, locale)

  return restInt
    ? `e ${hundred} e ${rest}`
    : hundred
}
