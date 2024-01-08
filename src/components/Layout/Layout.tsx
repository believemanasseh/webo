import {styled} from '@linaria/react';
import Navbar from '../Navbar/Navbar.tsx';
import Trends from '../Trends/Trends.tsx';

type LayoutProps = {
	children: JSX.Element;
	hideTrends?: boolean;
};

export default function Layout(props: LayoutProps): JSX.Element {
	return (
		<>
			<StyledLayout>
				<Navbar />
				{props.children}
				{!props.hideTrends && <Trends />}
			</StyledLayout>
		</>
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
