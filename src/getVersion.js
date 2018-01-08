// @flow

const path = require('path')
const pkg = require('../package.json')

/**
 * Displays the lib version
 *
 */

const getVersion = (): Promise<string> =>
  Promise.resolve( pkg.version )

module.exports = getVersion
