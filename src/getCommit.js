// @flow

/**
 * Create the commit command in git
 * 
 */

const getCommit = (type: string, message: string): string =>
  `git commit -m "${type}: ${message}"`

module.exports = getCommit
