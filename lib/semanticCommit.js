const inquirer = require('inquirer');
const answers = require('./answers');
const getCommit = require('./getCommit');
const commitMessage = require('./commitMessage');

/**
 * Question the user the type and message of the commit and execute it
 */

const semanticCommit = async lang => {
  const { type, message } = await answers(lang);
  const commit = await getCommit(type, message);
  const stdout = await commitMessage(commit);

  return stdout;
};

module.exports = semanticCommit;