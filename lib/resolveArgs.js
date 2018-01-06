const help = require('./help')();
const version = require('./getVersion')();
const commit = require('./commit');
const args = process.argv.slice(2, 3).toString();

const resolveArgs = (arg = args) => {
  switch (arg) {
    case '--version':
    case '-v':
      console.log(version);
      break;

    case '--pt':
      commit(arg);
      break;

    default:
      console.log(help);
  }
};

module.exports = { args, resolveArgs };