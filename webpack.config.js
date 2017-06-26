const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    debug: true,

    entry: {
        'app': './src/renderer/app.main',
        'vendor': './src/renderer/app.vendor'
    },

    target: 'electron-renderer',

    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules/]
            },
            {
                test: /\.(html|css)$/,
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor"]
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.join(process.cwd(), 'src')
        )
    ],
}