const defaultAuthConfig = {
	cacheLocation: 'localstorage',
};

const config = {
	auth: {
		...defaultAuthConfig,
		domain: 'auth-rocks-thankful-black-apartment.cic-demo-platform.auth0app.com',
		clientId: 'LQ8097cUjFTmcJRuHsPnkHiLuanFbrWg',
		// UNCOMMENT the following line to test the private API
		// audience: ['api://authrocks/'],
	},
	app: {
		enableSilentAuth: false,
		port: 3000,
	},
	server: {
		permissions: ['authRocks'],
	},
};

export default config;
