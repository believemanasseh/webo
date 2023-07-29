import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Navbar.module.css';

import at from '@/public/at.png';
import arrowDown from '@/public/arrow-down.png';
import arrowUp from '@/public/arrow-up.png';
import black from '@/public/black.png';
import bookmarks from '@/public/bookmarks.png';
import chatMessage from '@/public/chat-message.png';
import draft from '@/public/draft.png';
import ellipsis from '@/public/ellipsis.png';
import logo from '@/public/webo.png';
import home from '@/public/home.png';
import hashtag from '@/public/hashtag.png';
import more from '@/public/more.png';
import notification from '@/public/notification.png';
import profile from '@/public/profile.png';

export default function Navbar(): JSX.Element {
	const [showModal, setShowModal] = useState(false);

	const handleClick = (): void => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		const modal = document.querySelector('#modal');
		const image = document.getElementById('image');
		console.log(image, 'image');

		if (showModal) {
			(modal as any).style.visibility = 'visible';
		} else {
			(modal as any).style.visibility = 'hidden';
		}
	}, [showModal]);

	return (
		<div className={styles.navigation}>
			<div id='modal' className={styles.modal}>
				<div className={styles.modalItem}>
					<Image src={at} alt='at' width={20} height={20} />
					<Link href='/connect'>Connect</Link>
				</div>
				<div className={styles.modalItem}>
					<Image src={draft} alt='drafts' width={20} height={20} />
					<Link href='/drafts'>Drafts</Link>
				</div>
				<hr className={styles.borderLine} />
				<div className={styles.modalItem2}>
					<p>Creator Studio</p>
					<Image
						id='image'
						src={arrowDown}
						alt='arrow down'
						width={20}
						height={20}
					/>
				</div>
			</div>
			<Image
				className={styles.logo}
				src={logo}
				alt='webo logo'
				height={50}
				width={50}
				placeholder='blur'
			/>
			<ul className={styles.navbar}>
				<li className={styles.navItem}>
					<Image
						className={styles.image}
						src={home}
						alt='home page'
						width={20}
						height={20}
					/>
					<Link className={styles.home} href='/'>
						Home
					</Link>
				</li>
				<li className={styles.navItem}>
					<Image
						className={styles.image}
						src={hashtag}
						alt='explore'
						width={20}
						height={20}
					/>
					<Link className={styles.explore} href='/explore'>
						Explore
					</Link>
				</li>
				<li className={styles.navItem}>
					<Image
						className={styles.image}
						src={notification}
						alt='notifications'
						width={20}
						height={20}
					/>
					<Link className={styles.notifications} href='/notifications'>
						Notifications
					</Link>
				</li>
				<li className={styles.navItem}>
					<Image
						className={styles.image}
						src={chatMessage}
						alt='chat-message'
						width={20}
						height={20}
					/>
					<Link className={styles.messages} href='/messages'>
						Messages
					</Link>
				</li>
				<li className={styles.navItem}>
					<span>
						<Image
							className={styles.image}
							src={bookmarks}
							alt='bookmarks'
							width={20}
							height={20}
						/>
					</span>
					<Link className={styles.bookmarks} href='/bookmarks'>
						Bookmarks
					</Link>
				</li>
				<li className={styles.navItem}>
					<span>
						<Image
							className={styles.image}
							src={profile}
							alt='profile'
							width={20}
							height={20}
						/>
					</span>
					<Link className={styles.profile} href='/profile'>
						Profile
					</Link>
				</li>
				<li className={styles.navItem} onClick={handleClick}>
					<Image
						className={styles.image}
						src={more}
						alt='more'
						width={20}
						height={20}
					/>
					<span className={styles.more}>More</span>
				</li>
			</ul>
			<button className={styles.webBtn}>Web</button>
			<div className={styles.profileBtn}>
				<Image
					className={styles.profilePic}
					src={black}
					alt='user pic'
					height={50}
					width={50}
				/>
				<div>
					<h3>Manasseh</h3>
					<p>@believemanasseh</p>
				</div>
				<Image
					className={styles.ellipsis}
					src={ellipsis}
					alt='ellipsis'
					height={12}
					width={12}
				/>
			</div>
		</div>
	);
}