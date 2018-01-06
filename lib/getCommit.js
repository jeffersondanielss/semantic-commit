

/**
 * Cria o commando para o commit no git
 * 
 * @returns {string}
 */

const getCommit = (type, message) => `git commit -m "${type}: ${message}"`;

module.exports = getCommit;