

/**
 * Exibe mensagem de ajuda ao usuário
 * 
 * @returns {string}
 */

const help = () => `
  - SEMANTIC COMMIT -
  --------------------------------------------------------------------------  

  I use a rigid commit message format, and it makes me a better programmer.

  feat: add hat wobble
  ^--^  ^------------^
  |     |
  |     +-> Summary in present tense.
  |
  +-------> Type: chore, docs, feat, fix, refactor, style, or test.

  To do so after adding your files to stash use the semantic-commit
  command to standardize your commits.

  Commands
    - semantic-commit
    - semantic-commit --help
    - semantic-commit --version
    - semantic-commit --pt
`;

module.exports = help;