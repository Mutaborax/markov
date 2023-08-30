const { MarkovMachine } = require('./markov');

test('MarkovMachine.makeChains', () => {
  let mm = new MarkovMachine("the cat in the hat");
  expect(mm.chains).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]});
});

test('MarkovMachine.makeText', () => {
  let mm = new MarkovMachine("the cat in the hat");
  let text = mm.makeText();
  expect(text.split(' ').length).toBe(100);
});

test('MarkovMachine.makeText numWords', () => {
  let mm = new MarkovMachine("the cat in the hat");
  let text = mm.makeText(50);
  expect(text.split(' ').length).toBe(50);
});
