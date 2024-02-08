import {useState} from 'react';
import {styled} from '@linaria/react';

import at from '../../assets/at.png';
import arrowDown from '../../assets/arrow-down.png';
// import arrowUp from '../../assets/arrow-up.png';
import black from '../../assets/black.png';
import bookmarks from '../../assets/bookmarks.png';
import chatMessage from '../../assets/chat-message.png';
import draft from '../../assets/draft.png';
import ellipsis from '../../assets/ellipsis.png';
import logo from '../../assets/webo.png';
import home from '../../assets/home.png';
import hashtag from '../../assets/hashtag.png';
import more from '../../assets/more.png';
import notification from '../../assets/notification.png';
import profile from '../../assets/profile.png';

export default function Navbar(): JSX.Element {
	const [showModal, setShowModal] = useState(false);

	const handleClick = (): void => {
		setShowModal(!showModal);
	};

	return (
		<StyledNavbar>
			{showModal && (
				<div id='modal' className='modal'>
					<div>
						<img src={at} alt='at' width={20} height={20} />
						<a href='/connect'>Connect</a>
					</div>
					<div>
						<img src={draft} alt='drafts' width={20} height={20} />
						<a href='/drafts'>Drafts</a>
					</div>
					<hr />
					<div>
						<p>Creator Studio</p>
						<img id='image' src={arrowDown} alt='arrow down' width={20} height={20} />
					</div>
				</div>
			)}
			<img className='logo' src={logo} alt='webo logo' height={50} width={50} />
			<ul className='navbar'>
				<li>
					<img src={home} alt='home page' width={20} height={20} />
					<a href='/'>Home</a>
				</li>
				<li>
					<img src={hashtag} alt='explore' width={20} height={20} />
					<a href='/explore'>Explore</a>
				</li>
				<li>
					<img src={notification} alt='notifications' width={20} height={20} />
					<a href='/notifications'>Notifications</a>
				</li>
				<li>
					<img src={chatMessage} alt='chat-message' width={20} height={20} />
					<a href='/messages'>Messages</a>
				</li>
				<li>
					<img src={bookmarks} alt='bookmarks' width={20} height={20} />

					<a href='/bookmarks'>Bookmarks</a>
				</li>
				<li>
					<img src={profile} alt='profile' width={20} height={20} />
					<a href='/profile'>Profile</a>
				</li>
				<li onClick={handleClick}>
					<img src={more} alt='more' width={20} height={20} />
					<span>More</span>
				</li>
			</ul>
			<button>Web</button>
			<div className='profile-btn'>
				<img src={black} alt='user pic' height={50} width={50} />
				<div>
					<h3>Manasseh</h3>
					<p>@believemanasseh</p>
				</div>
				<img src={ellipsis} alt='ellipsis' height={12} width={12} />
			</div>
		</StyledNavbar>
	);
}

const StyledNavbar = styled.div`
	width: 100%;

	li {
		font-size: 25px;
		width: 100%;
	}

	li > img {
		margin-right: 25px;
	}

	.navbar {
		align-items: center;
		list-style-type: none;
		margin-top: 50px;
		text-align: left;
	}

	.navbar > li {
		margin: 35px 0px;
		cursor: pointer;
	}

	.navbar > li:hover {
		font-weight: bolder;
	}

	button {
		padding: 15px;
		width: 80%;
		border-radius: var(--border-radius);
		margin-top: 10px;
		background-color: var(--primary-color);
		color: white;
		border: none;
		font-weight: bolder;
		margin-right: 105px;
	}

	button:hover {
		cursor: pointer;
		background-color: var(--primary-color-lighter);
	}

	.logo {
		display: flex;
		justify-content: flex-start;
		margin-top: 15px;
	}

	.profile-btn {
		display: flex;
		flex-flow: nowrap row;
		gap: 15px;
		padding: 10px 10px;
		text-align: left;
		margin-top: 250px;
		width: 100%;
	}

	.profile-btn:hover {
		background-color: var(--background-color);
		width: 100%;
		border-radius: 100px;
		cursor: pointer;
	}

	.profile-btn h3 {
		margin-top: 3px;
	}

	.profile-btn > img:nth-child(1) {
		border-radius: var(--border-radius);
	}

	.profile-btn > img:nth-last-child(1) {
		margin-top: 20px;
	}

	.modal {
		visibility: hidden;
		position: fixed;
		top: 350px;
		left: 380px;
		margin: auto;
		z-index: 2;
		padding: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
		background-color: white;
		min-width: 300px;
		border-radius: 12px;
		text-align: left;
		line-height: 2;
	}

	.modal a {
		font-size: 25px;
	}

	.modal > div:nth-child(1),
	.modal > div:nth-child(2) {
		display: flex;
		gap: 30px;
		align-items: center;
	}

	.modal > div:nth-last-child(1) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 0px;
	}

	.modal > div:nth-last-child(1) p {
		font-weight: bolder;
	}

	.modal hr {
		border-top: 1px solid var(--border-color);
	}
`;
