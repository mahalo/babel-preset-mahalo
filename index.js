module.exports = {
	presets: [require("babel-preset-es2015")],
	plugins: [
		require("babel-plugin-transform-class-properties"),
		require('babel-plugin-transform-flow-strip-types'),
		require('babel-plugin-transform-mahalo'),
		require('babel-plugin-transform-runtime')
	]
};