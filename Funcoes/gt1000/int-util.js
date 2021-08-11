const formatNumber = require("format-number");
const sp = require("./int-util");
/**
 * Separar um inteiro em uma array com base na formatação de um número.
 *
 * @method split
 * @param {string} int Número inteiro.
 * @returns {Array} Array com as partes do número.
 */
//  c = (int) => {
//   const format = formatNumber();
//   const formatted = format(int);
//   const splitted = formatted.split(",");

//   return splitted;
// };

exports.split = (int) => {
  const format = formatNumber();
  const formatted = format(int);
  const splitted = formatted.split(",");

  return splitted;
};

/**
 * Obter a última parte de um número.
 *
 * @method getLastNumber
 * @param {string} int Número inteiro.
 * @returns {number} Última parte do número.
 */
exports.getLastNumber = (int) => {
  // return int;
  const splitted = exports.split(int);
  const last = splitted[splitted.length - 1];
  const integer = parseInt(last);

  return integer;
};
