import {styled} from '@linaria/react';

import black from '../../assets/black.png';
import calendar from '../../assets/calendar.png';
import leftArrow from '../../assets/left.png';

export default function ProfileHeader(): JSX.Element {
	return (
		<StyledProfileHeader>
			<div>
				<img src={leftArrow} alt='left arrow' height={20} width={20} />
				<div>
					<p className='user'>Manasseh</p>
					<p className='tweets-count'>2,564 Tweets</p>
				</div>
			</div>
			<img alt='profile banner' src={black} height={200} width={575} />
			<div>
				<img alt='profile pic' src={black} height={150} width={150} />
				<button className='edit-profile-btn'>Edit profile</button>
			</div>
			<div className='bio-section'>
				<p className='user'>Manasseh</p>
				<p className='handle'>@believemanasseh</p>
				<p className='bio'>De gustibus non est disputandum.</p>
				<div>
					<img alt='calendar' src={calendar} />
					<p className='joined-date'>Joined October 2012</p>
				</div>
				<div>
					<a href='/profile/following'>
						<span className='following-count'>178</span> Following
					</a>
					<a href='/profile/followers'>
						<span className='followers-count'>584</span> Followers
					</a>
				</div>
			</div>
		</StyledProfileHeader>
	);
}

const StyledProfileHeader = styled.div`
	> div:nth-child(1) {
		display: flex;
		gap: 30px;
		justify-content: flex-start;
		width: 100%;
	}

	> div:nth-child(1) > img {
		margin-top: 20px;
		margin-left: 10px;
	}

	> div:nth-child(1) > img:hover {
		cursor: pointer;
	}

	> div:nth-child(1) div:nth-last-child(1) {
		text-align: left;
		margin: 10px;
	}

	.user {
		font-weight: 600;
		font-size: 24px;
	}

	.tweets-count,
	.handle,
	.joined-date {
		color: #87898a;
	}

	> img:hover,
	> div:nth-child(2) > img:hover {
		cursor: pointer;
	}

	> div:nth-child(2) > img {
		border: 4px solid white;
		border-radius: 80px;
		position: fixed;
		top: 200px;
		left: 650px;
	}

	.edit-profile-btn {
		background-color: inherit;
		border-radius: var(--border-radius);
		padding: 10px;
		width: 20%;
		border: 1px solid #ccc;
		margin-left: 420px;
		margin-top: 10px;
		font-weight: 600;
	}

	.edit-profile-btn:hover {
		cursor: pointer;
	}

	.bio-section {
		text-align: left;
		margin-top: 50px;
		margin-left: 15px;
	}

	.bio {
		margin-top: 15px;
	}

	.bio-section div:nth-last-child(2) {
		display: flex;
		gap: 8px;
		margin-top: 10px;
		align-items: center;
	}

	.bio-section div:nth-last-child(1) {
		display: flex;
		gap: 15px;
		margin-top: 10px;
	}

	.following-count,
	.followers-count {
		font-weight: 600;
	}
`;
