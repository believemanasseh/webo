import { useEffect, useState, ChangeEvent } from 'react';
import Image from 'next/image.js';

import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

import Layout from '@/components/Layout/Layout';
import Webs from '@/components/Webs/Webs';

import black from '@/public/black.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
	useEffect(() => {
		makeElementBolder();
	}, []);

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault()
    console.log(e)
	}

	function makeElementBolder(): void {
		const element = document.getElementsByTagName('li')[0];
		element.style.fontWeight = 'bolder';
	}

	return (
		<Layout>
			<main className={styles.mainFeed}>
				<h3 className={styles.header}>Home</h3>
				<form className={styles.form} onSubmit={handleSubmit}>
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
							placeholder="What's happening?"
						/>
						<button className={styles.statusBtn} type='submit'>Web</button>
					</div>
				</form>
				<Webs />
			</main>
		</Layout>
	);
}
