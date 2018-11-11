const fs = require('fs')

module.exports = (prompt) => {
    fs.readdir('./', 'utf8', (error, data) => {
        //read dir(ectory)
        //accepts an error parameter and then the data. Error is first to remind you to do something with the error.
        if (error){
            throw(error);
        } else {
            prompt(data.join('\n'));
        }
    })
}