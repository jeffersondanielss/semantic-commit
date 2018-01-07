// @flow

/**
 * Display value of Promise
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