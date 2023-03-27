import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '@/components/Layout/Layout';

import black from '@/public/black.png';
import ellipsis from '@/public/ellipsis.png';
import leftArrow from '@/public/left.png';

export default function Following() {
	function makeElementBolder() {
		var element = document.getElementsByTagName('li')[5];
		element.style.fontWeight = 'bolder';
		element.style.color = 'var(--font-one)';
	}

	useEffect(() => {
		makeElementBolder();
	}, []);

	return (
		<Layout>
			<StyledFollowing>
				<div>
					<Image
						className='leftArrow'
						src={leftArrow}
						alt='left arrow'
						height={20}
						width={20}
					/>
					<div>
						<p className='user'>Manasseh</p>
						<p className='handle'>@believemanasseh</p>
					</div>
				</div>
				<div className='mainHeader'>
					<Link href='/profile/followers'>Followers</Link>
					<Link href='/profile/following'>Following</Link>
				</div>
				<div className='followersList'>
					<Image
						className='profilePic'
						src={black}
						alt='profilePic'
						height={50}
						width={50}
					/>
					<div className='follower'>
						<div>
							<div className='userHandle'>
								<h3 className='user2'>Francesca</h3>
								<p className='handle2'>@frankiee</p>
							</div>
							<div>
								<button>Following</button>
								<span>
									<Image src={ellipsis} alt='ellipsis' height={12} width={12} />
								</span>
							</div>
						</div>
						<p className='bio'>
							Finance Professional || Data Analyst || Avid Reader. Mediocrity is
							not an option for me. The world is my Oyster..
						</p>
					</div>
				</div>
			</StyledFollowing>
		</Layout>
	);
}

const StyledFollowing = styled.div`
	border-right: 1px solid var(--border-color);
	border-left: 1px solid var(--border-color);
	width: 30vw;
	height: 100vh;

	div:nth-child(1) {
		display: flex;
		gap: 30px;
		text-align: left;
		justify-content: flex-start;
		margin: 10px;
		width: 100%;
	}

	.leftArrow {
		margin-top: 20px;
		margin-left: 10px;
	}

	.leftArrow:hover {
		cursor: pointer;
	}

	.user {
		font-weight: 600;
		font-size: 24px;
	}

	.mainHeader {
		display: flex;
		justify-content: space-around;
		margin-top: 40px;
		color: var(--font-two);
	}

	.mainHeader a:hover {
		font-weight: 600;
		color: var(--font-one);
		cursor: pointer;
	}

	.mainHeader a:nth-child(1) {
		color: var(--font-one);
		font-weight: 600;
	}

	.followersList {
		display: flex;
		justify-content: flex-start;
		margin: auto;
		padding: 20px;
	}

	.profilePic {
		border-radius: var(--border-radius);
	}

	.follower {
		text-align: left;
	}

	.userHandle {
		display: flex;
		flex-flow: column wrap;
		line-height: 0px;
	}

	.bio {
		margin-left: 20px;
	}
`;
