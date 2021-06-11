module.exports = {
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = "RDPStudio Website Based on Web Ubuntu By RDPStudio Front-End Team";
				return args;
			})
	}
}
