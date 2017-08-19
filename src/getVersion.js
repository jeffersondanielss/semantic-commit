const path = require('path')
const pkg = require(path.join(__dirname, '../package.json'))

const getVersion = () => pkg.version

module.exports = getVersion
