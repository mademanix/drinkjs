const path = require('path');

module.exports = {
	externals: {
		sqlite3: 'commonjs sqlite3',
	},
	entry: './index.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		fallback: {
			"fs": false,
			"os": false,
			"path": false,
		}
	},
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'dist'),
	},
};