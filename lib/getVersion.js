const path = require('path');
const pkg = require('../package.json');

/**
 * Displays the lib version
 * 
 * @returns {Promise} versão atual da cli
 */

const getVersion = () => Promise.resolve(pkg.version);

module.exports = getVersion;