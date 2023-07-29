import Head from 'next/head';
import '@/styles/globals.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/redux/store';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ReduxProvider store={store}>
			<Head>
				<link rel='icon' href='/webo.png' />
			</Head>{' '}
			<Component {...pageProps} />{' '}
		</ReduxProvider>
	);
}
