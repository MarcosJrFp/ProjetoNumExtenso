const lt1000 = require('./lt1000')
const gt1000 = require('./gt1000')

/**
 * Passar para o feminino alguns números.
 *
 * @method toFemale
 * @param {string} num Um número qualquer.
 * @returns {string} O número com algumas partes no feminino.
 * @example
 * toFemale('quarenta e dois')
 * // 'quarenta e duas'
 */
exports.toFemale = (num) => {
  return num
    .replace(/\bum\b/, 'uma')
    .replace(/\bdois\b/, 'duas')
}

/**
 * Obter qualquer número escrito por extenso.
 *
 * @method writeInt
 * @param {string} int Um número para ser escrito.
 * @param {string} locale Código do país para escrever o número.
 * @param {string} [gender='m'] A opção do gênero do número.
 * @returns {string} O número escrito.
 */
exports.default = (int, locale = 'br', gender = 'm') => {
  const intNum = parseInt(int)
  let num

  if (intNum < 1000) num = lt1000.default(intNum, locale)
  if (intNum === 1000) num = 'mil'
  if (intNum > 1000) num = gt1000.default(int, locale)

  return gender === 'f'
    ? toFemale(num)
    : num
}