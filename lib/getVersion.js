

const path = require('path');
const pkg = require('../package.json');

const getVersion = () => Promise.resolve(pkg.version);

module.exports = getVersion;