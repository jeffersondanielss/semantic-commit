

const inquirer = require('inquirer');
const answers = require('./answers');
const getCommit = require('./getCommit');
const commitMessage = require('./commitMessage');

const semanticCommit = async lang => {
  const answer = await answers(lang);
  const commit = await getCommit(answer);
  const stdout = await commitMessage(commit);

  return stdout;
};

module.exports = semanticCommit;