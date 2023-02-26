import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import black from '@/public/black.png';
import bookmark from '@/public/bookmark.png';
import comment from '@/public/comment.png';
import favorite from '@/public/favorite.png';
import retwitch from '@/public/retwitch.png';

export default function Webs(props) {
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
						Azuchi K. <span>@azuuchi_kinika</span> <span>&#x2022; 11h</span>
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
						<Image
							className={styles.actionBtn}
							src={favorite}
							alt='like post'
							height={20}
							width={20}
						/>
						<Image
							className={styles.actionBtn}
							src={bookmark}
							alt='bookmark post'
							height={20}
							width={20}
						/>
					</span>
				</div>
			</div>
		</>
	);
}
