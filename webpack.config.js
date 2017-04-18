const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'eval-inline-map',
    devServer: {
        inline: true,
        contentBase: 'public',
        proxy: {
            '/api/': {
                target: 'http://localhost:9876',
                secure: false
            }
        }
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/, /controllers/, /services/, path.join(__dirname, 'keys.js'), path.join(__dirname, 'index.js')],
                use: {
                    loader: 'babel-loader'
                }

            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })]
}
