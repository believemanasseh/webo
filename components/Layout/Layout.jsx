import React from 'react';
import styled from 'styled-components';

export default function Layout(props) {
	return (
		<React.Fragment>
			<StyledLayout>{props.children}</StyledLayout>
		</React.Fragment>
	);
}

const StyledLayout = styled.div`
	display: flex;
	flex-flow: nowrap row;
	justify-content: space-around;
	padding: auto;
	height: auto;
	width: 60vw;
	margin: auto;
	text-align: center;
	margin-bottom: 5px;
`;
