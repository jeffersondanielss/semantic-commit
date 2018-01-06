const path = require('path');
const pkg = require('../package.json');

/**
 * Exibe a versão da lib
 * 
 * @returns {string}
 */

const getVersion = () => pkg.version;

module.exports = getVersion;