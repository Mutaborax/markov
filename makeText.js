const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

function generateText(text) {
  let mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

function makeText(path) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    axios.get(path)
      .then(response => generateText(response.data))
      .catch(error => console.error(`Cannot read URL: ${error}`));
  } else {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error(`Cannot read file: ${err}`);
      } else {
        generateText(data);
      }
    });
  }
}

let path = process.argv[2];
makeText(path);
