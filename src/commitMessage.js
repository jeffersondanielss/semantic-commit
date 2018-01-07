//@flow

const { execSync } = require('child_process')

/**
 * Log the commit message in git
 */

const commitMessage = (commit: string): string =>
  execSync(commit).toString()

module.exports = commitMessage
