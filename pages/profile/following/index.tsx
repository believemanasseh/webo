import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '@/components/Layout/Layout';
import leftArrow from '@/public/left.png';

export default function Following(): JSX.Element {
	function makeElementBolder(): void {
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
						className='left-arrow'
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
				<div className='main-header'>
					<Link href='/profile/followers'>Followers</Link>
					<Link href='/profile/following'>Following</Link>
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

	.left-arrow {
		margin-top: 20px;
		margin-left: 10px;
	}

	.left-arrow:hover {
		cursor: pointer;
	}

	.user {
		font-weight: 600;
		font-size: 24px;
	}

	.main-header {
		display: flex;
		justify-content: space-around;
		margin-top: 40px;
		color: var(--font-two);
	}

	.main-header a:hover {
		font-weight: 600;
		color: var(--font-one);
		cursor: pointer;
	}

	.main-header a:nth-child(2) {
		color: var(--font-one);
		font-weight: 600;
	}
`;
