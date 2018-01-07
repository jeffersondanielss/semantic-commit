

/**
 * Create the commit command in git
 * 
 */

const getCommit = (type, message) => `git commit -m "${type}: ${message}"`;

module.exports = getCommit;