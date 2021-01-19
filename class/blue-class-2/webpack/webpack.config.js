const path = require('path');

module.exports = {
	entry: './2.js',
	output: {
		path: path.resolve("dist"),
		filename: "bundle.js"
	}
}