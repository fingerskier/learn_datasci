class Neuron {
	constructor(weights, bias) {
		this.weights = weights // array of decimals
		this.bias = bias // decimal offset
	}

	output(inputs) {
		this.output = 0

		for (I in inputs) {
			this.output += this.weights[I] * inputs[I]
		}

		this.output += this.bias
	}

	train(expectation) {
		var cost = expectation - this.output

		for (I in this.weights) {
			this.weights += cost
		}
	}
}