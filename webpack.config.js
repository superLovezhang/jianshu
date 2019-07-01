const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const babelpolyfill = require("babel-polyfill");

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_module/ },
            // { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            // { test: /\.scss$/, use: ['style-loader', 'css-loader', 'scss-loader?modules&localIdentName=[path][name]-[hash:5]', 'postcss-loader'] },
            { 
                test: /\.(css|sass|scss)$/, 
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                context: path.resolve(__dirname, 'src'),
                                hashPrefix: 'my-custom-hash',
                              }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMao: true,
                            plugins: (loader)=> [
                                require('autoprefixer')({ browsers: ['>0.15% in CN'] })
                            ]
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 不加扩展名自动补充数组内的
        alias: {  // 别名，用@表示路径根目录下的src
            '@': path.join(__dirname, './src')
        }
    },
    devServer: {
        proxy: {
          '/api': {
            target: 'http://api.mtnhao.com/',
            changeOrigin: true,     // target是域名的话，需要这个参数，
            secure: false,          // 设置支持https协议的代理
          },
        }
      }
}