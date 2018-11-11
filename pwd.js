//module.exports = () => process.cwd()

//THIS IS WHAT WE HAD FROM THE PRIOR FILE
//prompt(process.cwd());

//UPDATED to add prompt to function
module.exports = (prompt) => prompt(process.cwd());