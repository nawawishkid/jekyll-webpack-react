const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist/assets/js'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};