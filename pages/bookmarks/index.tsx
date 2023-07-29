import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '@/components/Layout/Layout';
import Webs from '@/components/Webs/Webs';

export default function Bookmarks(): JSX.Element {
	function makeElementBolder(): void {
		const element = document.getElementsByTagName('li')[4];
		element.style.fontWeight = 'bolder';
	}

	useEffect(() => {
		makeElementBolder();
	}, []);

	return (
		<Layout>
			<StyledBookmarks>
				<div>
					<h3 className='header'>Bookmarks</h3>
					<p className='handle'>@believemanasseh</p>
				</div>
				<Webs />
			</StyledBookmarks>
		</Layout>
	);
}

const StyledBookmarks = styled.div`
	border-right: 1px solid var(--border-color);
	border-left: 1px solid var(--border-color);
	width: 30vw;
	height: 100vh;

	.header,
	.handle {
		text-align: left;
	}

	.header {
		font-size: 28px;
		text-align: left;
		margin-top: 15px;
		margin-left: 15px;
	}

	.handle {
		color: var(--font-two);
		margin-left: 15px;
	}
`;
