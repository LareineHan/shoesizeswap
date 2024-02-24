// webpack.config.js
import path from 'path';
import { fileURLToPath } from 'url'; // Import the fileURLToPath function

const __filename = fileURLToPath(import.meta.url); // Create a custom __filename
const __dirname = path.dirname(__filename); // Create a custom __dirname

export default {
	mode: 'production',
	entry: {
		bundle: ['./converter.js', './script.js', './sizes.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
