import React, { useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Layout from '@/components/Layout/Layout';
import black from '@/public/black.png';

export default function Messages() {
	return (
		<Layout hideSidebar>
			<StyledMessages>
				<div className='messageList'>
					<h3 className='header'>Messages</h3>
					<form>
						<input type='text' placeholder='Search Direct Messages' />
					</form>
					<div className='message'>
						<Image
							className='profilePic'
							src={black}
							alt='user pic'
							height={50}
							width={50}
						/>
						<div>
							<h6>
								hiboo <span>@Hiboo94Sh</span> <span>&#x2022; Jan 10</span>
							</h6>
							<p>Shared a Web</p>
						</div>
					</div>
				</div>
				<div className='chatBox'>
					<div>
						<h1>Select a message</h1>
						<p>
							Choose from your existing conversations, start a new one, or just
							keep swimming.
						</p>
						<button className='newMsgBtn'>New message</button>
					</div>
				</div>
			</StyledMessages>
		</Layout>
	);
}

const StyledMessages = styled.div`
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

	.messageList,
	.chatBox {
		overflow-y: auto;
	}

	.messageList {
		border-right: 1px solid var(--border-color);
		border-left: 1px solid var(--border-color);
	}

	.chatBox {
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
	}

	.profilePic {
		margin-left: 15px;
		border-radius: var(--border-radius);
	}

	.message > div h6,
	.message > div p {
		text-align: left;
	}

	.message > div p {
		color: var(--font-two);
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
`;
