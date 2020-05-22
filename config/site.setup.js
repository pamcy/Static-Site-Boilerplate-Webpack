/* eslint-disable */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const {
  prompt
} = require('enquirer');

const skip_setup = process.env.SKIP_SETUP || false;

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

async function runSetup() {
  clear();
  console.log(
    chalk.red(
      figlet.textSync('Static Site Boilerplate', {
        horizontalLayout: 'fitted'
      })
    )
  );

  const questions = await prompt([{
    type: 'select',
    name: 'jquery',
    message: 'Would you like jQuery installed?',
    choices: ['Yes', 'No'],
  }]);

  // Add jQuery to scripts
  if (questions.jquery == 'Yes') {
    const jsContent =
      '// Load jQuery from NPM\n' +
      'import $ from \'jquery\';\n\n' +
      'window.jQuery = $;\n' +
      'window.$ = $;\n';

    fs.writeFile(path.join(ROOT, '/src/js/main.js'), jsContent, (err) => {});
  }
};

if (!skip_setup) {
  runSetup();
}
