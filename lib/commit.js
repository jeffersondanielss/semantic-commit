const inquirer = require('inquirer');
const commitMessage = require('./commitMessage');
const { pt, en } = require('./questions');

/**
 * Questiona ao usuario o tipo e mensagem do commit e o executa
 */

const commit = lang => {
  inquirer.prompt(lang ? pt : en).then(({ type, message }) => commitMessage(type, message), err => console.log('Error: ', err));
};

module.exports = commit;