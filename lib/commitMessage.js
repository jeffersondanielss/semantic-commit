const { exec } = require('child_process');
const getCommit = require('./getCommit');

/**
 * Registra a mensagem do commit no git
 */

const commitMessage = (type, message) => {
  const commit = getCommit(type, message);

  exec(commit, (error, stdout, stderr) => console.log(stdout));
};

module.exports = commitMessage;