//@flow

const { exec } = require('child_process')
const getCommit = require('./getCommit')

/**
 * Log the commit message in git
 */

const commitMessage = (type: string, message: string) => {
  const commit = getCommit(type, message)

  exec(commit, (error, stdout, stderr) => console.log(stdout))
}

module.exports = commitMessage
