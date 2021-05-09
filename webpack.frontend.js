const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: "./frontend/src",
	output: {
		path: path.resolve(__dirname, "backend/public"),
		filename: "bundle.js",
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react'],
						plugins: [],
					}
				}
			},{
				test: /\.css$/i,
				use:[
					{
						loader: 'style-loader'
					},
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: '[name]__[local]--[hash:base64:5]'
							},
						},
					}
				]
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	plugins: [
		// new HtmlWebpackPlugin({
        //     hash: true,
        //     filename: "index.html",  //target html
        //     template: "./frontend/index.html" //source html
        // }),
	]
};