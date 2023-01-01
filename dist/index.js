#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.redBright("Welcome to Basic Todo App"));
const todos = [];
let AddMore = true;
while (AddMore) {
    const answers = await inquirer.prompt([
        {
            type: 'string',
            name: 'todo',
            message: 'Enter Your Todo',
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Add More Todo?',
            default: false
        }
    ]);
    const { todo, addMore } = answers;
    AddMore = addMore;
    if (answers.todo) {
        todos.push(todo);
    }
    else {
        console.log("Kindly Write any Input Pls");
    }
    if (todos.length > 0) {
        console.info(chalk.redBright('Your Todo List: '));
        todos.forEach((t) => console.info(t));
    }
    else {
        console.info('No Todos in the list');
    }
}
//# sourceMappingURL=index.js.map