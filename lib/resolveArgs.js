const log = require('./log');
const help = require('./help')();
const version = require('./getVersion')();
const semanticCommit = require('./semanticCommit');
const args = process.argv.slice(2, 3).toString();

/**
 * Filters the arguments passed by the user
 */

const resolveArgs = (arg = args) => {
  switch (arg) {
    case '--version':
    case '-v':
      console.log(version);
      break;

    case '--pt':
      log(semanticCommit, arg);
      break;

    default:
      console.log(help);
      break;
  }
};

module.exports = { args, resolveArgs };