const fs = require('fs');
const html5Lint = require('html5-lint');
/* eslint-disable no-console */
const { readFile, readdirSync } = fs;

// gets an array of html files from ./src
const files = readdirSync('./src').filter((file) => file.endsWith('.html'));

files.forEach((file) => {
  // pega o path de cada arquivo
  const filePath = `./src/${file}`;
  readFile(filePath, 'utf8', function(err, html) {
    if (err) throw err;

    html5Lint(html, function(_err, results) {
      results.messages.forEach(function(msg) {
        const { type } = msg; // error or warning
        const { message } = msg;

        console.log('HTML5 Lint [%s]: %s', type, message);
      });
    });
  });
});
