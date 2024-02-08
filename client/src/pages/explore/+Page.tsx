import {styled} from '@linaria/react';

export default function Page(): JSX.Element {
	return (
		<StyledPage>
			<div className='outer'>
				Outer<div className='inner'>Inner</div>
			</div>
		</StyledPage>
	);
}

const StyledPage = styled.div`
	.outer {
		background-color: white;
	}

	.inner {
		background-color: white;
		position: fixed;
		top: 10px;
	}
`;
