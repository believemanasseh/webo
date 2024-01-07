import {styled} from '@linaria/react';
import Layout from '@/src/components/Layout/Layout';
import black from '@/src/assets/black.png';

export default Page;

function Page(): JSX.Element {
	return (
		<Layout hideTrends>
			<StyledPage>
				<div className='message-list'>
					<h3 className='header'>Messages</h3>
					<form>
						<input type='text' placeholder='Search Direct Messages' />
					</form>
					<div className='message'>
						<img className='profile-pic' src={black} alt='user pic' height={50} width={50} />
						<div>
							<h6>
								hiboo <span>@Hiboo94Sh</span> <span>&#x2022; Jan 10</span>
							</h6>
							<p>Shared a Post</p>
						</div>
					</div>
				</div>
				<div className='chat-box'>
					<div>
						<h1>Select a message</h1>
						<p>
							Choose from your existing conversations, start a new one, or just keep swimming.
						</p>
						<button className='new-msg-btn'>New message</button>
					</div>
				</div>
			</StyledPage>
		</Layout>
	);
}

const StyledPage = styled.div`
	display: grid;
	grid-template-columns: 400px 500px;
	margin: auto;
	width: 30vw;
	height: 100vh;

	.header {
		text-align: left;
	}

	.header {
		font-size: 23px;
		text-align: left;
		margin-top: 15px;
		margin-left: 15px;
	}

	.message-list,
	.chat-box {
		overflow-y: auto;
	}

	.message-list {
		border-right: 1px solid var(--border-color);
		border-left: 1px solid var(--border-color);
	}

	.chat-box {
		border-right: 1px solid var(--border-color);
	}

	form {
		margin-top: 15px;
	}

	input {
		border-radius: var(--border-radius);
		padding: 15px;
		width: 90%;
		text-align: center;
		border: 1px solid var(--border-color);
		font-size: 14px;
	}

	.message {
		display: flex;
		flex-flow: nowrap row;
		gap: 15px;
		margin-top: 20px;
		padding: 10px 0px;
	}

	.message:hover {
		background-color: var(--background-color);
		cursor: pointer;
	}

	.profile-pic {
		margin-left: 15px;
		border-radius: var(--border-radius);
	}

	.message > div h6,
	.message > div p {
		text-align: left;
	}

	.message > div p {
		color: var(--font-two);
		margin-top: 3px;
	}

	.message > div h6 {
		font-size: 16px;
		margin-top: 5px;
	}

	.message > div h6 span {
		color: var(--font-two);
		font-weight: 100;
	}

	.chatBox {
		display: flex;
		flex-flow: nowrap column;
		justify-content: center;
		text-align: left;
		padding: 0px 30px;
	}

	.chatBox div {
		width: 70%;
		margin: auto;
	}

	.chatBox p {
		color: var(--font-two);
		margin-top: 10px;
	}

	.chatBox button {
		border-radius: var(--border-radius);
		padding: 15px;
		width: 60%;
		margin-top: 20px;
		background-color: var(--primary-color);
		color: white;
		font-weight: bolder;
		border: none;
	}

	.chatBox button:hover {
		cursor: pointer;
	}
`;
