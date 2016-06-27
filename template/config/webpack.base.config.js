import path from 'path';

import webpack from 'webpack';

import baseConfig from './base.config.js';

const rootPath = path.join(__dirname, '../');

export default {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: baseConfig.build.assetsRoot,
		publicPath: baseConfig.build.assetsPublicPath,
		filename: '[name].js',
	},
	module: {
		loaders: [{
				test: /\.vue$/,
				loader: 'vue'
			}, {
				test: /\.js$/,
				loader: 'babel',
				include: rootPath,
				exclude: /node_modules/
			}, {
				test: /\.json$/,
				loader: 'json'
			}, {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: 'static/img/[name].[hash:7].[ext]'
				}
			}, {
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: 'static/fonts/[name].[hash:7].[ext]'
				}
			}

		]
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			utils: path.join(rootPath, './src/util/index.js'),
			store: path.join(rootPath, './src/store/index.js'),
			actions: path.join(rootPath, './src/store/actions/index.js')
		}
	}
}