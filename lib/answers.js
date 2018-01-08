

const inquirer = require('inquirer');
const { pt, en } = require('./questions');

const answers = lang => new Promise((resolve, reject) => {
  inquirer.prompt(lang ? pt : en).then(resp => resolve(resp), err => reject(err));
});

module.exports = answers;