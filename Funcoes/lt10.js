const getList = require('./get-list')

/**
 * Obter um número inteiro menor que dez por extenso.
 *
 * @function lt10
 * @param {number} int Um número inteiro menor que dez.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} O número por extenso.
 */
exports.default = (int, locale='br') => {
  return getList.listLt10(locale)[int]
}