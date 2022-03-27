const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

/**
 * ! NOTE:
 * Normally I would use standard boilerplate like "create-react-app" or "create-next-app" and customize from there.
 * This config serves practice and demonstration purposes.
 */

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    const config = {
        entry: path.join(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.?ts[x]?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                        }
                    }
                },
                {
                    test: /\.scss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: isProd ? '[local]__[hash:base64]' : '[name]__[local]'
                                }
                            }
                        },
                        // Compiles Sass to CSS
                        {
                            loader: "sass-loader",
                            options: {
                                additionalData: "@import '@/assets/styles/utils/_services.scss';"
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|webp)$/i,
                    type: 'asset/resource'
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'index.html')
            }),
            new CopyPlugin({
                patterns: [
                    { from: 'public', to: 'public', noErrorOnMissing: true }
                ]
            }),

        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
                publicPath: path.join(__dirname, 'public')
            },
            compress: false,
            port: 8000
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.html'],
            alias: { '@': path.join(__dirname, 'src') }
        },
        stats: "minimal"
    }

    return config;
}
