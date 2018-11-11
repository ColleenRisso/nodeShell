// console.log(Object.keys(process))

// process.stdout.write("Hello World");
// process.stdout.write("Hello World\n");
//standard output and a new line (standard practice in a bash command)

/* THIS WAS JUST TO GET US FAMILIAR
process.stdout.write("\nPrompt > ");
//this will start a new line and indicate that the user is inpiutting a prompt on the same line.

process.stdin.on("data", data => {
  //standard input: takes an event string, and a listener (which is data input, and in this case a function)
  console.log("You typed", data.toString().trim());
  //in this case, we will just log indicating what the user has input and show the input.
})
*/

const pwd = require ("./pwd")
const ls = require ("./ls")
const cat = require ("./cat")
//THIS IS ONE WAY TO BRING IN INFORMATION FROM OTHER FILES

const prompt = data => {
  console.log(data);
  process.stdout.write("> ");
};

prompt("Welcome to Node Shell!");

process.stdin.on("data", data => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(' ')

  switch (command) {
    case "pwd":

      prompt(pwd(prompt));

      //prompt(process.cwd());
      //Will always return the working directory where pwd is invoked. This is commented out because we've moved it to a separate file.

      // prompt(__dirname) will return the directory of the bash.js file, no matter where the pwd is invoked.

      //prompt(require("./pwd")());
      //This is another way to call the pwd function we've set up in the separate pwd.js file.
      break;

    case "ls":
      prompt(ls(prompt));
      //require("./ls")(prompt)
      break;

    case "cat":
      prompt(cat(arg, prompt));
      break;

    default:
      prompt("not found");
  }
})

