/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([]);
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
};

module.exports = withTM(nextConfig);
