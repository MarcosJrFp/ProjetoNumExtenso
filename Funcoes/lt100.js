var lt10 = require("./lt10");
var getList = require("./get-list");

/**
 * Obter um número inteiro menor que cem por extenso.
 *
 * @function lt100
 * @param {number} int Um número inteiro menor que cem.
 * @param {string} locale Código do país para escrever o número.
 * @returns {string} O número escrito por extenso.
 */
exports.default = (int, locale = "br") => {
  if (int < 10) return lt10.default(int, locale);
  if (int < 20) return getList.listLt100(locale)[int - 10];

  const unit = lt10.default(int % 10, locale);
  const ten = getList.listLt100(locale)[(int - (int % 10)) / 10 + 8];

  return unit !== "zero" ? `${ten} e ${unit}` : ten;
};
