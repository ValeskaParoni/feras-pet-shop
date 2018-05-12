const path = require('path');
module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        }
        ]
    }
}
