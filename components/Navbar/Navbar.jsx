import Image from 'next/image';
import Link from 'next/link';

import styles from './Navbar.module.css';

import bookmarks from '../../public/bookmarks.png';
import chatMessage from '../../public/chat-message.png';
import logo from '../../public/webo.png';
import home from '../../public/home.png';
import hashtag from '../../public/hashtag.png';
import more from '../../public/more.png';
import notification from '../../public/notification.png';
import profile from '../../public/profile.png';

export default function Navbar() {
	return (
		<div className={styles.navigation}>
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
				<li className={styles.navItem}>
					<Image
						className={styles.image}
						src={more}
						alt='more'
						width={20}
						height={20}
					/>
					<Link className={styles.more} href='/more'>
						More
					</Link>
				</li>
			</ul>
			<button className={styles.twitchBtn}>Twitch</button>
		</div>
	);
}
