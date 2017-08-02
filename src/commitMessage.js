const { exec } = require('child_process');
const getCommit = require('./getCommit')

const commitMessage = (type, message) => {
  const commit = getCommit(type, message);

  exec(commit, function(error, stdout, stderr){
    console.log(stdout);
  });
}

module.exports = commitMessage