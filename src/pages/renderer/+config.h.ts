import type {Config} from 'vike/types';

export default {
	clientRouting: true,
	// passToClient: ['pageProps'],
	meta: {
		Page: {
			env: {server: false, client: true}, // SPA for all pages
		},
	},
} satisfies Config;
