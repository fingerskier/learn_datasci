// import brain from 'brain.js';
const brain = require('brain.js');
const fs = require('fs')
const model = require("./model.in.json")

const trainingData = require('./data/matt6.json')

const lstm = new brain.recurrent.LSTM();

lstm.fromJSON(model)

const result = lstm.train(trainingData, {
  iterations: 100,
  log: details => console.log(details),
  errorThresh: 0.011
});

fs.writeFileSync('./model.out.json', JSON.stringify(lstm.toJSON()))

const run1 = lstm.run('I');
const run2 = lstm.run('Father');
const run3 = lstm.run('ye');
const run4 = lstm.run('whoever');

console.log('run 1: I' + run1);
console.log('run 2: Father' + run2);
console.log('run 3: ye' + run3);
console.log('run 4: whoever' + run4);
