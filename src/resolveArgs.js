const help = require('./help')()
const version = require('./getVersion')()
const commit = require('./commit')

const resolveArgs = arg => {
  switch (arg) {
    case '--version':
      console.log(version)
      break

    case '--pt':
      commit(arg)
      break

    default:
      console.log(help)
  }
}

module.exports = resolveArgs
