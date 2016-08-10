module.exports = {
    presets: [require("babel-preset-es2015")],
    plugins: [
        require('babel-runtime-es2015-instance-methods'),
        require('babel-plugin-transform-es2015-classes-ielt10'),
        require('babel-plugin-transform-mahalo'),
        require("babel-plugin-transform-class-properties"),
        require('babel-plugin-transform-flow-strip-types'),
        require('babel-plugin-transform-runtime')
    ]
};