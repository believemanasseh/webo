import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
	const [value, setValue] = useState('');

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setValue(event.target.value);
	}

	return (
		<div className={styles.sidebar}>
			<form>
				<input
					className={styles.search}
					type='text'
					placeholder='Search Webo'
					value={value}
					onChange={handleChange}
				/>
			</form>
			<div className={styles.trends}>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
				<h3 className={styles.trendsHeader}>Trends for you</h3>
			</div>
			<Link className={styles.link} href='/tos'>
				Terms of Service
			</Link>
			<Link className={styles.link} href='/privacy'>
				Privacy Policy
			</Link>
			<Link className={styles.link} href='/cookie'>
				Cookie Policy
			</Link>
			<Link className={styles.link} href='/accessibility'>
				Accessibility
			</Link>
			<p className={styles.copyright}>&copy; 2023 Webo</p>
		</div>
	);
}
