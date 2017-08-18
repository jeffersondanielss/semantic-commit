const help = require('./help')()
const getVersion = require('./getVersion')
const commit = require('./commit')

const resolveArgs = arg => {
  switch (arg) {
    case '--version':
      getVersion()
      break

    case '--pt':
      commit(arg)
      break

    default:
      console.log(help)
  }
}

module.exports = resolveArgs
