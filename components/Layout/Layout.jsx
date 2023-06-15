import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout(props) {
	return (
		<React.Fragment>
			<StyledLayout>
				<Navbar />
				{props.children}
				{props.hideSidebar ? <></> : <Sidebar />}
			</StyledLayout>
		</React.Fragment>
	);
}

const StyledLayout = styled.div`
	display: grid;
	grid-template-columns: 20% 50% 25%;
	gap: 20px;
	padding: auto;
	height: auto;
	width: 60vw;
	margin: auto;
	text-align: center;
`;
