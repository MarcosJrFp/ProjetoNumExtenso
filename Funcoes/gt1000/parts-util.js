const reverse = require('@arr/reverse')
const { getLastNumber } = require('./int-util')
const getList = require('../get-list')
const lt1000 = require('../lt1000')

/**
 * Adicionar vírgula entre algumas partes.
 *
 * @method addComma
 * @param {Array} parts Array com as partes.
 * @returns {Array} Partes com a vírgula caso tenho sido necessário.
 */
exports.addComma = (parts) => {
  return parts.map((part, index, array) => {

    // REGRA: Não adiciona entre a penúltima e a última parte.
    return index < array.length - 2
      ? `${part},`
      : part
  })
}

/**
 * Adicionar conjunção "e" em determinadas partes.
 *
 * @method addConjunction
 * @param {Array} parts Partes do número que está sendo processado.
 * @param {string} int Número inteiro que está sendo processado.
 * @returns {Array} Partes com a conjução "e" caso tenha sido necessário.
 */
exports.addConjunction = (parts, int) => {
  const lastNum = getLastNumber(int)

  // A parte é valida apenas se:
  // - Caso 1: A parte é um inteiro menor que cem.
  // - Caso 2: A parte é um inteiro divisível por cem.
  if (lastNum < 100 || lastNum % 100 === 0) {
    return parts.map((part, index, array) => {
      return index === array.length - 2
        ? `${part} e`
        : part
    })
  }

  return parts
}

/**
 * Limpar partes que não são lidas no número.
 *
 * @method clear
 * @param {Array} parts Partes do número que está sendo processado.
 * @returns {Array} Partes com algumas partes removidas.
 */
exports.clear = (parts) => {

  // Etapas para a remoção:
  // - Etapa 1: Remove zeros à esquerda.
  // - Etapa 2: Remove partes que não são lidas.
  // - Etapa 3: Remove o "1" das partes com "1 mil".
  return parts
    .map(part => part.replace(/^0+\s?/, ''))
    .filter(part => /^\d/.test(part))
    .map(part => part.replace(/^1\s(mil)$/, '$1'))
}

/**
 * Escrever por extenso os números inteiros dentro das partes.
 *
 * @method name
 * @param {Array} parts Partes do número que está sendo processado.
 * @param {string} locale Código do país para escrever o número.
 * @returns {Array} Partes com os inteiros escritos por extenso.
 */
exports.name = (parts, locale) => {
  return reverse(reverse(parts).map((part, i) => {
    const numberName = getList.listGt1000(locale)[i - 1]

    return numberName
      ? `${part} ${numberName}`
      : part
  }))
}

/**
 * Singularizar partes do número que são maiores que um.
 *
 * @method singularize
 * @param {Array} parts Partes do número que está sendo processado.
 * @returns {string} Número com as partes singularizadas.
 */
exports.singularize = (parts) => {
  const regex = /^(1\s.*)ões/
  const replacer = (str) => str.replace(regex, '$1ão')

  return parts.map(replacer)
}

/**
 * Deve escrever os inteiros restantes em uma array com as partes.
 *
 * @method write
 * @param {Array} parts Partes do número que está sendo processado.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} Número como todas as partes escritas por extenso.
 */
exports.write = (parts, locale) => {
  return parts.map(part => {
    return part.replace(/^(\d+)/, digit => {
      const int = parseInt(digit)

      return lt1000.default(int, 'br')
    })
  })
}