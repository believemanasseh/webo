import { useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Layout from '@/components/Layout/Layout';
import black from '@/public/black.png';
import globe from '@/public/globe.png';

export default function Notifications(): JSX.Element {
	function makeElementBolder(): void {
		const notificationBtn = document.getElementsByTagName('li')[2];
		notificationBtn.style.fontWeight = 'bolder';
	}

	useEffect(() => {
		makeElementBolder();
	}, []);

	return (
		<Layout>
			<StyledNotifications>
				<div>
					<h3 className='header'>Notifications</h3>
				</div>
				<div className='main-header'>
					<h4>All</h4>
					<h4>Mentions</h4>
				</div>
				<div className='notification'>
					<div className='img'>
						<Image src={globe} alt='globe' height={20} width={20} />
					</div>
					<div className='feed'>
						<div>
							<Image
								className='profile-pic'
								src={black}
								alt='user pic'
								height={30}
								width={30}
							/>
						</div>
						<div>
							<h6>Manasseh</h6>
							<p>
								I kinda need help deciding what drawing I wanna mint. Or if I
								should just wait
							</p>
						</div>
					</div>
				</div>
			</StyledNotifications>
		</Layout>
	);
}

const StyledNotifications = styled.main`
	border-right: 1px solid var(--border-color);
	border-left: 1px solid var(--border-color);
	width: 30vw;
	height: 100vh;

	.header {
		font-size: 28px;
		text-align: left;
		margin: 15px;
	}

	.main-header {
		display: flex;
		justify-content: space-around;
		margin-top: 40px;
		margin-bottom: 20px;
		color: var(--font-two);
	}

	.notification {
		display: flex;
		flex-flow: row nowrap;
		border-top: 1px solid var(--border-color);
		border-bottom: 1px solid var(--border-color);
		align-items: center;
		gap: 10px;
		padding-left: 40px;
		padding-right: 100px;
	}

	.profile-pic {
		border-radius: var(--border-radius);
		margin-right: 400px;
	}

	.feed {
		display: flex;
		margin: 20px 0px;
		flex-flow: column wrap;
		align-items: flex-end;
		// padding-top: 0px;
		gap: 10px;
		padding-bottom: 20px;
	}

	.feed div h6 {
		text-align: left;
		font-size: 14px;
	}

	.feed div p {
		margin-top: 10px;
		text-align: left;
		// width: 100%;
	}

	.img {
		margin-top: -90px;
	}
`;
