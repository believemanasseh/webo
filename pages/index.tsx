import { useEffect, useState } from 'react';
import Image from 'next/image.js';

import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

import Layout from '@/components/Layout/Layout.tsx';
import Webs from '@/components/Webs/Webs.tsx';

import black from '@/public/black.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}

	function makeElementBolder() {
		const element = document.getElementsByTagName('li')[0];
		element.style.fontWeight = 'bolder';
	}

	useEffect(() => {
		makeElementBolder();
	}, []);

	return (
		<Layout>
			<main className={styles.mainFeed}>
				<h3 className={styles.header}>Home</h3>
				<form className={styles.form}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='profile pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<textarea
							className={styles.status}
							name='status'
							value={value}
							onChange={handleChange}
							placeholder="What's happening?"
						/>
						<button className={styles.statusBtn}>Web</button>
					</div>
				</form>
				<Webs />
			</main>
		</Layout>
	);
}
