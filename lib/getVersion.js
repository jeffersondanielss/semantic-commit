const path = require('path');
const pkg = require('../package.json');

/**
 * Displays the lib version
 *
 */

const getVersion = () => pkg.version;

module.exports = getVersion;