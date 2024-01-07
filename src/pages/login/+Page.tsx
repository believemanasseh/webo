import React, {ChangeEvent, useState} from 'react';
import {styled} from '@linaria/react';
import useStore from '@/src/store';
import logo from '@/src/assets/webo.png';
import googleLogo from '@/src/assets/google.svg';
import appleLogo from '@/src/assets/apple.svg';

export default Page;

function Page(): JSX.Element {
	const [currentSlide, setCurrentSlide] = useState(1);
	const authState = useStore((state) => state.auth);
	const setAuthState = useStore((state) => state.setAuthState);

	function handleSubmit(e: ChangeEvent<HTMLFormElement>): void {
		e.preventDefault();
		const formData: FormData = new FormData(e.target);
		if (currentSlide === 1) {
			const initValue = formData.get('id')?.toString();
			console.log(initValue);
			setAuthState({...authState, initialValue: initValue});
		}

		if (currentSlide === 2) {
			console.log('login');
		}

		setCurrentSlide(currentSlide + 1);
	}

	return (
		<React.Fragment>
			<StyledLogin>
				<div className='container'>
					<div className='logo'>
						<img src={logo} alt='logo' width={50} height={50} />
					</div>
					{currentSlide === 1 ? (
						<div className='slide-one'>
							<h1 className='header'>Sign in to Webo</h1>
							<div className='auth-btn'>
								<img src={googleLogo} alt='google svg' height={20} width={20} />
								<span>Sign in with Google</span>
							</div>
							<div className='auth-btn'>
								<img src={appleLogo} alt='apple svg' height={20} width={20} />
								<span>Sign in with Apple</span>
							</div>
							<h2>
								<span>or</span>
							</h2>
							<form onSubmit={handleSubmit}>
								<textarea name='id' placeholder='email or username' required />
								<button className='next-btn' type='submit'>
									Next
								</button>
								<button className='forgot-pwd' type='button'>
									Forgot password?
								</button>
								<p className='no-account'>
									Don&apos;t have an account? <a href='/signup'>Sign up</a>
								</p>
							</form>
						</div>
					) : (
						<div className='slide-two'>
							<h1 className='header'>Enter your password</h1>
							<form onSubmit={handleSubmit}>
								{authState.initialValue && authState.initialValue.includes('@') ? (
									<textarea
										className='email'
										placeholder={'email' + '\n' + authState.initialValue}
										disabled
									/>
								) : (
									<textarea
										className='username'
										placeholder={'username' + '\n' + authState.initialValue}
										disabled
									/>
								)}
								<textarea className='password' placeholder='Password' required />
								<a className='forgot-pwd' href='/'>
									Forgot password?
								</a>
								<button className='login-btn' type='submit'>
									Log in
								</button>
							</form>
							<p className='no-account'>
								Don&apos;t have an account?{' '}
								<a className='signup' href='/signup'>
									Sign up
								</a>
							</p>
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
	padding: auto;
	display: flex;

	.container {
		background-color: white;
		border: 1px solid white;
		border-radius: 20px;
		height: 600px;
		width: 30%;
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
	}

	.slide-two .header {
		margin-top: 20px;
		text-align: left;
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

	.container .slide-one {
		width: 50%;
		margin: auto;
	}

	.container .slide-two {
		width: 80%;
		margin: auto;
	}

	.auth-btn {
		margin-top: 25px;
		padding: 10px;
		border: 1px solid #d2d5d9;
		border-radius: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.auth-btn span {
		font-weight: bolder;
		padding-left: 5px;
	}

	.auth-btn:hover {
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
		border: 2px solid var(--border-color);
		border-radius: 4px;
		background-color: #f8f8f8;
		font-size: 14px;
		resize: none;
		overflow: hidden;
	}

	button.next-btn {
		width: 100%;
		border-radius: 30px;
		padding: 10px;
		margin-top: 20px;
		color: white;
		font-weight: 800;
		font-size: 16px;
		border: none;
		background-color: #000000;
	}

	button:hover {
		cursor: pointer;
	}

	button.forgot-pwd {
		width: 100%;
		border-radius: 30px;
		padding: 10px;
		margin-top: 20px;
		color: #000000;
		background-color: white;
		border: 1px solid #d2d5d9;
		font-weight: 800;
		font-size: 16px;
	}

	button.next-btn:hover,
	button.login-btn:hover {
		background-color: #212020;
	}

	button.forgot-pwd:hover {
		background-color: #e0dede;
	}

	.login-btn {
		text-align: center;
		width: 100%;
		padding: 15px;
		margin-top: 150px;
		border-radius: 30px;
		border: 1px solid var(--border-color);
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
	.forgot-pwd {
		color: #f5f125;
	}

	p.no-account {
		margin-top: 30px;
		color: #87898a;
	}

	p.no-account a {
		color: #f5f125;
	}
`;
