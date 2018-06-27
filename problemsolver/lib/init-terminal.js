const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');

const clearAndInit = () => {
    clear();
    console.log(
        chalk.blue(
            figlet.textSync('CONQ/UER', { horizontalLayout: 'full' })
        )
    );
}

module.exports = clearAndInit;