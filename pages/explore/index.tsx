import styled from 'styled-components';

export default function Explore() {
	return (
		<StyledExplore>
			<div className='outer'>
				Outer<div className='inner'>Inner</div>
			</div>
		</StyledExplore>
	);
}

const StyledExplore = styled.div`
	.outer {
		background-color: white;
	}

	.inner {
		background-color: white;
		position: fixed;
		top: 10px;
	}
`;
