class MarkovMachine {
  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  makeChains() {
    let chains = {};

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (!chains[word]) {
        chains[word] = [];
      }

      chains[word].push(nextWord);
    }

    this.chains = chains;
  }

  makeText(numWords = 100) {
    let keys = Object.keys(this.chains);
    let key = keys[Math.floor(Math.random() * keys.length)];
    let out = [];
  
    while (out.length < numWords) {
      out.push(key);
      key = this.chains[key][Math.floor(Math.random() * this.chains[key].length)];
  
      if (key === null) {
        key = keys[Math.floor(Math.random() * keys.length)];
      }
    }
  
    return out.join(' ');
  }
}

module.exports = {
  MarkovMachine,
};
