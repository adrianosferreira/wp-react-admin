const path = require('path');

module.exports = {
	entry:  ['./src/index.js'],
	output: {
		path:     path.join(__dirname, 'lib'),
		filename: path.join('index.js')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-react"]
					}
				}
			}
		]
	}
};