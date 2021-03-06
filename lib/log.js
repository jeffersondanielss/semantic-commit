

/**
 * transforma o buffer erro em string
 * 
 * @param {object} err - Erro retornado pela promise
 * @returns {void}
 */

const logError = err => {
  let bufferOutput = err.output[1];
  let stdout = bufferOutput.toString();

  console.log(stdout);
};

const log = (callback, args = '') => {
  callback(args).then(data => console.log(data)).catch(err => logError(err));
};

module.exports = log;