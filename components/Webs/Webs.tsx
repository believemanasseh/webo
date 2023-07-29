import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import black from '@/public/black.png';
import bookmark from '@/public/bookmark.png';
import bookmarkWhite from '@/public/bookmarkwhite.png';
import comment from '@/public/comment.png';
import favorite from '@/public/favorite.png';
import favoriteWhite from '@/public/favoritewhite.png';
import retwitch from '@/public/retwitch.png';

export default function Webs(): JSX.Element {
	const [liked, setLiked] = useState(false);
	const [bookmarked, setBookmarked] = useState(false);

	function handleLikeClick() {
		setLiked(!liked);
	}

	function handleBookmarkClick() {
		setBookmarked(!bookmarked);
	}

	return (
		<>
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
						Manasseh <span>@believemanasseh</span> <span>&#x2022; 11h</span>
					</h6>
					<p>
						I kinda need help deciding what drawing I wanna mint. Or if I should
						just wait
					</p>
					<span className={styles.actions}>
						<Image
							className={styles.actionBtn}
							src={comment}
							alt='comment on post'
							height={20}
							width={20}
						/>
						<Image
							className={styles.actionBtn}
							src={retwitch}
							alt='retwitch post'
							height={20}
							width={20}
						/>
						{liked ? (
							<Image
								className={styles.actionBtn}
								src={favorite}
								alt='like post'
								height={20}
								width={20}
								onClick={handleLikeClick}
							/>
						) : (
							<Image
								className={styles.actionBtn}
								src={favoriteWhite}
								alt='like post white'
								height={20}
								width={20}
								onClick={handleLikeClick}
							/>
						)}
						{bookmarked ? (
							<Image
								className={styles.actionBtn}
								src={bookmark}
								alt='bookmark post'
								height={20}
								width={20}
								onClick={handleBookmarkClick}
							/>
						) : (
							<Image
								className={styles.actionBtn}
								src={bookmarkWhite}
								alt='bookmark post white'
								height={20}
								width={20}
								onClick={handleBookmarkClick}
							/>
						)}
					</span>
				</div>
			</div>
		</>
	);
}
