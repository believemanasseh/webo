import { useState } from 'react';
import Image from 'next/image.js';

import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

import Layout from '@/components/Layout/Layout.jsx';
import Navbar from '@/components/Navbar/Navbar.jsx';
import Sidebar from '@/components/Sidebar/Sidebar';

import black from '../public/black.png';
import bookmark from '../public/bookmark.png';
import comment from '../public/comment.png';
import favorite from '../public/favorite.png';
import retwitch from '../public/retwitch.png';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}

	return (
		<Layout>
			<Navbar />
			<div className={styles.mainFeed}>
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
						<button className={styles.statusBtn}>Twitch</button>
					</div>
				</form>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
				<div className={styles.feed}>
					<div>
						<Image
							className={styles.profilePic}
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h6>
							Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
						</h6>
						<p>
							I kinda need help deciding what drawing I wanna mint. Or if I
							should just wait
						</p>
						<span className={styles.actions}>
							<Image
								className={styles.actionBtn}
								src={comment}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={retwitch}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={favorite}
								height={20}
								width={20}
							/>
							<Image
								className={styles.actionBtn}
								src={bookmark}
								height={20}
								width={20}
							/>
						</span>
					</div>
				</div>
			</div>
			<Sidebar />
		</Layout>
	);
}
