// @flow

const path = require('path')
const pkg = require('../package.json')

/**
 * Displays the lib version
 * 
 * @returns {string}
 */

const getVersion = () => pkg.version

module.exports = getVersion
