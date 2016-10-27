module.exports = {
	devServer: {
		inline: true,
		host: '0.0.0.0',
		port: '3000',
		watchOptions: {
			aggregateTimeout: 300,
			poll: true
		}
	},

	entry: "./src/index.js",
	output: {
		path: __dirname,
		filename: "./build/bundle.js"


	},
	module: {
		loaders: [
		{
			test: /\.scss$/,
			loaders: ["style", "css?sourceMap", "sass?sourceMap"]
		},
		{ 
			test: /\.css$/, 
			loader: "style!css" 
		},{
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file?name=public/fonts/[name].[ext]'
		},
		{
			test: /\.js$/,
                loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
                query: {
                	presets: ['es2015']
                } 
            }
            ]
        }
    };