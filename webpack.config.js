var path = require('path');
var webpack = require('webpack');

module.exports = {
    target: 'web',
    entry: [
        'babel-polyfill',
        './demo/demo.jsx'
        ],
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'demo/bundle.js'
    },
    resolve: {
        root: path.join(__dirname, ''),
        modulesDirectories: [
        'web_modules',
        'node_modules',
        'demo'
        ],
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.scss$/, 
                loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'react-hot',
                    'babel'
                ]
            }
        ]
    },
    plugins: new webpack.HotModuleReplacementPlugin()
};
