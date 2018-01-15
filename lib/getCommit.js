

const getCommit = ({ type, message }) => `git commit -m "${type}: ${message}"`;

/**
 * Create the commit command in git
 * 
 * @param {string} type - tipo do commit
 * @param {string} message - mensagem do commit
 * @returns {string} comando para registrar um novo commit no git
 */

module.exports = getCommit;