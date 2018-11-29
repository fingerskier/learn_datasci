const brain = require('brain.js')
const training_data = require('./data3.json')

// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5,
    hiddenLayers: [1],     // array of ints for the sizes of the hidden layers in the network
    activation: 'tanh',  // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01   // supported for activation type 'leaky-relu'
};

var net = new brain.recurrent.LSTMTimeStep();

net.train(training_data);


console.log(
    net.toJSON(), 
    net.run([1, 2]),
    net.run([4, 5]),
    net.run([20,21])
)
