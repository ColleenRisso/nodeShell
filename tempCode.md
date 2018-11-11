#This is what we got as a group
## In the bash.js file
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  let cmdToRun = require(`./${cmd}`);
  process.stdout.write('cmd given: ' + cmd + '\n');
  cmdToRun();
});

##In the pwd.js file
module.exports = () => {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}