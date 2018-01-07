// @flow

const path = require('path')
const pkg = require('../package.json')

/**
 * Displays the lib version
 *
 */

const getVersion = (): string =>
  pkg.version

module.exports = getVersion
