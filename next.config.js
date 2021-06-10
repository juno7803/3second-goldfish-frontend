module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: ['@svgr/webpack'],
			// url-loader: svg 파일을 url로도 import 할 수 있도록 함
		});
		return config;
	},
};
