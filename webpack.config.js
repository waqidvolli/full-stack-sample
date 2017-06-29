module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders:[
			{
				test: /\.js$/,
				lloader: 'babel-loader'
			}
		]
	}
};