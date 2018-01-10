

const inquirer = require('inquirer');
const { pt, en } = require('./questions');

const answers = lang => inquirer.prompt(lang ? pt : en);

module.exports = answers;