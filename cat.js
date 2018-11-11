const fs = require('fs')

module.exports = (filename, prompt) => {
    fs.readFile(filename, 'utf8', (error, data) => {
        if (error) {
            prompt(error.stack)
        } else {
            prompt(data)
        }
    })
}