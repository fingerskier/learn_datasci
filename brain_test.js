const brain = require('brain.js')

// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3],     // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid',  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01   // supported for activation type 'leaky-relu'
};

var net = new brain.recurrent.LSTMTimeStep();

net.train([
  [1, 2, 3]
]);

var output = net.run([1, 2]);  // 3

console.log(output, net.toJSON())
