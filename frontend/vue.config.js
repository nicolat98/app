const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/static/dist/' : 'http://localhost:8080',
	outputDir: '../backend/static/dist',
	indexPath: '../../templates/base-vue.html',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		host: '0.0.0.0',
		compress: true,
		port: 8080,
		hot: true,
		allowedHosts: 'all',
		devMiddleware:{
			writeToDisk : filePath => filePath.endsWith("index.html"),
			headers: {"Acess-Control-Allow-Origin":"*"},
			publicPath: "http://localhost:8080",
		  },
		  hot: 'only',
	  },
	  
}
