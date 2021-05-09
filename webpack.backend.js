const path = require('path');
const nodeExternals = require('webpack-node-externals'); // when bundling with Webpack for backend, do not bundle its node_modules dependencies

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	output: {
		path: path.resolve('./backend/build'),
		filename: '[name].js',
		library: {
			type: 'commonjs2' // to be able to import in index.js
		}
	},
	entry: {
		home: './backend/routes/home.js'
	},
	target: 'node',
	externals: [nodeExternals()],
	node: {
		__dirname: false,	// es6 has not __dirname and __filename defined. By setting both to false,
		__filename: false, 	// webpack will not touch your __dirname or __filename in code
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/i,
				use:[
					{
						loader: "css-loader",
						options: {
							modules: {
								exportOnlyLocals: true,
								localIdentName: '[name]__[local]--[hash:base64:5]'
							},
						},
					}
				]
				
			},
		]
	},
	watchOptions: {
		aggregateTimeout: 200,
		poll: 1000,
	  },
	
}