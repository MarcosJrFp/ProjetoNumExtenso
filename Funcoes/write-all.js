const assignDeep = require('assign-deep')
const { isValidNumber, parseNumber } = require('./num-util')
const writeInt = require('./write-int')


/**
 * Passar um número escrito por extenso para o modo negativo.
 *
 * @method toNegative
 * @param {string} num Valor escrito por extenso.
 * @param {string} [mode='formal'] Opção sobre o modo a ser escrito.
 * @returns {string} Valor como negativo.
 */
exports.toNegative = (num) => {
  return `menos ${num}`
}

/**
 * Escrever números por extenso.
 *
 * @param {string|number} num Número para ser escrito por extenso.
 * @param {object} opts Opções para configurar modo de escrita.
 * @returns {string} Número escrito por extenso.
 */
exports.converter = (num, opts='number') => {
  // if (typeof num !== 'number') {
  //   throw new TypeError('O valor tem de ser numérico!')
  // }

  const numString = num.toString()

  if (!isValidNumber(numString)) {
    throw new Error('Valor inválido!')
  }

  let defaultOpts = {
    mode: 'number',
    locale: 'br',
    negative: 'formal',
    number: {
      gender: 'm',
      decimal: 'formal'
    }
  }

  // Usando o pacote 'assign-deep' no lugar de Object.assign(),
  // pois esse último substitui completamente todas as propriedades
  // de um objeto que está dentro de outro objeto.
  opts = assignDeep(defaultOpts, opts)

  const { isNegative, integer, decimal } = parseNumber(numString)

  if (opts.mode === 'number') {
    const intNameSingular = opts.number.gender === 'f' ? 'inteira' : 'inteiro'
    const intName = parseInt(integer) === 1 ? intNameSingular : `${intNameSingular}s`
    const intText = writeInt.default(integer, opts.locale, opts.number.gender)

    // Se tem a parte inteira e não tem a parte decimal
    if (integer !== '0' && decimal === '0') {
      return isNegative
        ? exports.toNegative(intText)
        : intText
    }

    // Se não tem a parte inteira e tem a parte decimal
    if (integer === '0' && decimal !== '0') {
      let number = opts.number.decimal === 'informal'
        ? `zero ${decText}`
        : decText

      return isNegative
        ? exports.toNegative(number)
        : number      
    }

    // Se tem a parte inteira e a parte decimal
    if (integer !== '0' && decimal !== '0') {
      if (opts.number.decimal === 'informal') {
        return `${intText} ${decText}`
      }

      const numText = `${intText} ${intName} e ${decText}`

      return isNegative
        ? exports.toNegative(numText)
        : numText
    }
  }
}
