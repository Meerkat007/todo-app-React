var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map', // gives us line numbers if there's an error, which is good for debugging
    entry: [ 
        // where webpack is going to look for our files
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server', // hot reloading
        './src' // initial files, default is index.js 
    ],
    output: {
        path: path.join('public'),
        filename: 'bundle.js'
    },
    resolve: {
        // where webpack is going to look for the files to bundle it all together
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'] // modules we'll install to help us load our app
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin() // webpack won't compile if there are errors
    ]
        
};