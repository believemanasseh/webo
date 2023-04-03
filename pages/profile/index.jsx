import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '@/components/Layout/Layout';
import ProfileHeader from '@/components/ProfileHeader/ProfileHeader';
import Webs from '@/components/Webs/Webs.jsx';

export default function Profile() {
	function makeElementBolder() {
		const element = document.getElementsByTagName('li')[5];
		element.style.fontWeight = 'bolder';
	}

	useEffect(() => {
		makeElementBolder();
	}, []);

	return (
		<Layout>
			<StyledProfile>
				<ProfileHeader />
				<div>
					<div className='mainHeader'>
						<Link href='/profile'>Webs</Link>
						<Link href='/profile/replies'>Replies</Link>
						<Link href='/profile/likes'>Likes</Link>
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
	height: 100vh;

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
`;
