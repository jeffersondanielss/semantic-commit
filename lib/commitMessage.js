const { execSync } = require('child_process');

/**
 * Log the commit message in git
 */

const commitMessage = commit => execSync(commit).toString();

module.exports = commitMessage;