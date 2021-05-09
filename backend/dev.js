/**
 * This enable client js automatically rebuild by webpack in development environment
 */
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpack_config = require('../webpack.frontend.js');
const compiler = webpack(webpack_config);
const { publicPath } = webpack_config.output;

module.exports = middleware(compiler, {
	publicPath
});