import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logo from '../../public/webo.png';
import googleLogo from '../../public/google.svg';
import appleLogo from '../../public/apple.svg';

export default function Login() {
	const [config, setConfig] = useState({
		value: '',
		password: '',
		next: false,
	});

	function handleChange(event) {
		setConfig({ ...config, value: event.target.value });
	}

	function handleClick(event) {
		setConfig({ ...config, next: true });
	}

	function handleChangePassword(event) {
		setConfig({ ...config, password: event.target.value });
	}
	return (
		<React.Fragment>
			<StyledLogin>
				<div className='container'>
					<div className='logo'>
						<Image
							src={logo}
							alt='logo'
							width={50}
							height={50}
							placeholder='blur'
						/>
					</div>
					{config.next ? (
						<div className='container3'>
							<h1 className='header2'>Enter your password</h1>
							<form>
								{config.value.includes('@') ? (
									<textarea
										className='email'
										onChange={handleChange}
										placeholder={'email' + '\n' + config.value}
										disabled
									/>
								) : (
									<textarea
										className='username'
										onChange={handleChange}
										placeholder={'username' + '\n' + config.value}
										disabled
									/>
								)}
								<textarea
									className='password'
									value={config.password}
									onChange={handleChangePassword}
									placeholder='Password'
								/>
								<Link className='forgotPwd' href='/'>
									Forgot password?
								</Link>
							</form>
							<button className='loginBtn' type='button'>
								Log in
							</button>
							<p className='noAcct'>
								Don't have an account?{' '}
								<Link className='signup' href='/signup'>
									Sign up
								</Link>
							</p>
						</div>
					) : (
						<div className='container2'>
							<h1 className='header'>Sign in to Webo</h1>
							<div className='googl'>
								<Image
									src={googleLogo}
									alt='google svg'
									height={20}
									width={20}
								/>
							</div>
							<div className='apple'>
								<Image src={appleLogo} alt='apple svg' height={20} width={20} />
								<span>Sign up with Apple</span>
							</div>
							<h2>
								<span>or</span>
							</h2>
							<form>
								<textarea
									value={config.value}
									onChange={handleChange}
									placeholder='email or username'
								/>
								<button className='nextBtn' type='button' onClick={handleClick}>
									Next
								</button>
								<button className='forgotPwd' type='button'>
									Forgot password?
								</button>
								<p className='nacctx'>
									Don't have an account? <Link href='/signup'>Sign up</Link>
								</p>
							</form>
						</div>
					)}
				</div>
			</StyledLogin>
		</React.Fragment>
	);
}

const StyledLogin = styled.div`
	background-color: #eeeee4;
	height: 100vh;
	width: 100vw;
	margin: auto;
	padding-top: 150px;

	.container {
		background-color: white;
		border: 1px solid white;
		border-radius: 20px;
		height: 600px;
		width: 550px;
		margin: auto;
	}

	.logo {
		margin: auto;
		padding-top: 20px;
		display: flex;
		justify-content: center;
	}

	.header {
		text-align: center;
		padding-top: 30px;
	}

	h2 {
		width: 100%;
		text-align: center;
		border-bottom: 1px solid #d2d5d9;
		line-height: 0.1em;
		margin: 20px 0px;
	}

	h2 span {
		background: #fff;
		padding: 0 10px;
	}

	.container2 {
		width: 50%;
		margin: auto;
	}

	.container3 {
		width: 70%;
		margin: auto;
	}

	.apple {
		margin-top: 25px;
		padding: 5px;
		border: 1px solid #d2d5d9;
		border-radius: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.apple span {
		font-weight: bolder;
		padding-left: 5px;
	}

	.googl {
		margin-top: 25px;
		padding: 5px;
		border: 1px solid #d2d5d9;
		border-radius: 25px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.googl:hover,
	.apple:hover {
		cursor: pointer;
	}

	form {
		width: 100%;
	}

	textarea {
		width: 100%;
		height: 55px;
		padding: 20px;
		box-sizing: border-box;
		border: 2px solid #ccc;
		border-radius: 4px;
		background-color: #f8f8f8;
		font-size: 14px;
		resize: none;
		overflow: hidden;
	}

	button.nextBtn {
		width: 100%;
		border-radius: 30px;
		padding: 10px;
		margin-top: 20px;
		color: white;
		font-weight: bolder;
		border: none;
		background-color: #000000;
	}

	button:hover {
		cursor: pointer;
	}

	button.forgotPwd {
		width: 100%;
		border-radius: 30px;
		padding: 10px;
		margin-top: 20px;
		color: #000000;
		background-color: white;
		border: 1px solid #d2d5d9;
		font-weight: bolder;
	}

	button.nextBtn:hover,
	button.loginBtn:hover {
		background-color: #212020;
	}

	button.forgotPwd:hover {
		background-color: #e0dede;
	}

	.header2 {
		display: flex;
		text-align: center;
		padding-top: 20px;
		flex-wrap: nowrap;
	}

	.loginBtn {
		text-align: center;
		width: 100%;
		margin-top: 160px;
		padding: 15px;
		border-radius: 30px;
		border: 1px solid #ccc;
		font-weight: bolder;
		color: white;
		background-color: #000000;
	}

	.email,
	.username,
	.password {
		margin-top: 30px;
	}

	.email,
	.username {
		padding: 10px;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		border: none;
		line-height: 1.5;
	}

	.password {
		background-color: inherit;
		padding: auto;
	}

	.signup,
	.forgotPwd {
		color: #f5f125;
	}

	p.noAcct {
		margin-top: 15px;
	}

	p.nacctx {
		text-align: start;
		padding-top: 50px;
		color: #87898a;
	}

	p.nacctx a {
		color: #f5f125;
	}
`;
