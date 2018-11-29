const brain = require('brain.js')
const inputFile = process.argv[0]
const fs = require('fs')
const model = require("./model.in.json") || 0
// const model = 0
const net = new brain.recurrent.LSTM()
const training_data = require('./data/train1.json')


if (model != 0) net.fromJSON(model)

net.train(training_data, {
	iterations: 1000,
	log: details => console.log(details),
	errorThresh: 0.01
})

fs.writeFileSync('./model.out.json', JSON.stringify(net.toJSON()))


var result = net.run({"K0":59.00,"K1":66.36,"K2":78.30,"K3":89.91,"K4":96.96,"K5":108.27,"K6":121.75,"K7":134.75,"K8":144.67,"K9":154.52})

console.log(JSON.stringify(result))
