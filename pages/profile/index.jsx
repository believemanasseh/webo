import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Layout from '@/components/Layout/Layout';
import Webs from '@/components/Webs/Webs.jsx';

import black from '@/public/black.png';
import calendar from '@/public/calendar.png';
import leftArrow from '@/public/left.png';

export default function Profile() {
	return (
		<Layout>
			<StyledProfile>
				<div className='profileHeader'>
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
							<p className='tweetsCount'>2,564 Tweets</p>
						</div>
					</div>
					<Image
						className='profileBanner'
						src={black}
						height={200}
						width={575}
					/>
					<div>
						<Image
							className='profilePic'
							src={black}
							height={150}
							width={150}
						/>
						<button className='editProfileBtn'>Edit profile</button>
					</div>
					<div className='bioSection'>
						<p className='user'>Manasseh</p>
						<p className='handle'>@believemanasseh</p>
						<p className='bio'>De gustibus non est disputandum.</p>
						<div>
							<Image className='calendar' src={calendar} />
							<p className='joinedDate'>Joined October 2012</p>
						</div>
						<div>
							<p>
								<span className='followingCount'>178</span> Following
							</p>
							<p>
								<span className='followersCount'>584</span> Followers
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className='mainHeader'>
						<h4>Webs</h4>
						<h4>Webs & replies</h4>
						<h4>Likes</h4>
					</div>
				</div>
				<div className='webs'>
					<Webs />
				</div>
			</StyledProfile>
		</Layout>
	);
}

const StyledProfile = styled.main`
	border-right: 1px solid #ccc;
	border-left: 1px solid #ccc;
	width: 30vw;
	height: auto;

	.profileHeader div:nth-child(1) {
		display: flex;
		gap: 30px;
		justify-content: flex-start;
		width: 100%;
	}

	.leftArrow {
		margin-top: 20px;
		margin-left: 10px;
	}

	.leftArrow:hover {
		cursor: pointer;
	}

	.profileHeader div:nth-child(1) div:nth-last-child(1) {
		text-align: left;
		margin: 10px;
	}

	.user {
		font-weight: 600;
		font-size: 24px;
	}

	.tweetsCount,
	.handle,
	.joinedDate {
		color: #87898a;
	}

	.profileBanner:hover,
	.profilePic:hover {
		cursor: pointer;
	}

	.profilePic {
		border: 4px solid white;
		border-radius: 80px;
		position: fixed;
		top: 200px;
		left: 690px;
	}

	.editProfileBtn {
		background-color: inherit;
		border-radius: var(--border-radius);
		padding: 10px;
		width: 20%;
		border: 1px solid #ccc;
		margin-left: 420px;
		margin-top: 10px;
		font-weight: 600;
	}

	.editProfileBtn:hover {
		cursor: pointer;
	}

	.bioSection {
		text-align: left;
		margin-top: 50px;
		margin-left: 15px;
	}

	.bio {
		margin-top: 15px;
	}

	.bioSection div:nth-last-child(2) {
		display: flex;
		gap: 8px;
		margin-top: 10px;
		align-items: center;
	}

	.bioSection div:nth-last-child(1) {
		display: flex;
		gap: 15px;
		margin-top: 10px;
	}

	.followingCount,
	.followersCount {
		font-weight: 600;
	}

	.mainHeader {
		display: flex;
		justify-content: space-around;
		margin-top: 40px;
		color: var(--font-two);
	}
`;
