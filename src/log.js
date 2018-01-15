// @flow

/**
 * transforma o buffer erro em string
 * 
 * @param {object} err - Erro retornado pela promise
 * @returns {void}
 */

const logError = (err: Object): void => {
  let bufferOutput = err.output[1]
  let stdout = bufferOutput.toString()

  console.log(stdout)
}

const log = (callback: (value: string) => Promise<string>, args: string = ''): void => {
  callback(args)
    .then( data => console.log(data) )
    .catch( err => logError(err) )
}

module.exports = log