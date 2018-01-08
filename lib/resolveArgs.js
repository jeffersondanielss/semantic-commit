

const log = require('./log');
const help = require('./help');
const version = require('./getVersion');
const semanticCommit = require('./semanticCommit');
const args = process.argv.slice(2, 3).toString();

const resolveArgs = (arg = args) => {
  switch (arg) {
    case '--version':
    case '-v':
      return version();

    case '--pt':
      return semanticCommit(args);

    default:
      return help();
  }
};

module.exports = { args, resolveArgs };