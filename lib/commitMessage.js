

const { execSync } = require('child_process');

const commitMessage = commit => execSync(commit).toString();

module.exports = commitMessage;