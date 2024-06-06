import {useState, ChangeEvent} from 'react';
import {styled} from '@linaria/react';

import logo from '../../assets/webo.png';
import googleLogo from '../../assets/google.svg';
import appleLogo from '../../assets/apple.svg';

export {Page};

function Page(): JSX.Element {
	const [currentSlide, setCurrentSlide] = useState(1);

	function handleSubmit(e: ChangeEvent<HTMLFormElement>): void {
		e.preventDefault();
		const formData = new FormData(e.target);
		console.log(formData.get('dob'));
		console.log(formData.get('email'));
	}

	return (
		<>
			<StyledPage>
				<div className='container'>
					{currentSlide === 1 && (
						<div className='logo'>
							<img src={logo} alt='logo' width={50} height={50} />
						</div>
					)}
					{currentSlide === 1 ? (
						<div className='slide-one'>
							<h1 className='header'>Join Webo today</h1>
							<div className='auth-btn'>
								<img src={googleLogo} alt='google svg' height={20} width={20} />
								<span>Sign up with Google</span>
							</div>
							<div className='auth-btn'>
								<img src={appleLogo} alt='apple svg' height={20} width={20} />
								<span>Sign up with Apple</span>
							</div>
							<h2>
								<span>or</span>
							</h2>
							<button
								className='create-account'
								type='button'
								onClick={() => setCurrentSlide(currentSlide + 1)}
							>
								Create account
							</button>
							<p>
								By signing up, you agree to the Terms of Service and Privacy Policy, including
								Cookie Use.
							</p>
							<p>
								Have an account already? <a href='/login'>Log in</a>
							</p>
						</div>
					) : (
						<div className='slide-two'>
							<h1 className='header'>Create your account</h1>
							<form onSubmit={handleSubmit}>
								<input
									type='text'
									name='username'
									className='username'
									placeholder='Username'
									required
								/>
								<input type='text' name='email' className='email' placeholder='Email' required />
								<div className='dob'>
									<h6>Date of birth</h6>
									<p className='dob-text'>
										This will not be shown publicly. Confirm your own age, even if this account
										is for a business, a pet, or something else.
									</p>
									<input name='dob' type='date' required />
								</div>
								<button className='signup' type='submit'>
									Sign up
								</button>
							</form>
						</div>
					)}
				</div>
			</StyledPage>
		</>
	);
}

const StyledPage = styled.div`
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

	.container .slide-one {
		width: 50%;
		margin: auto;
	}

	.container .slide-two {
		width: 80%;
		margin: auto;
	}

	.logo {
		margin: auto;
		padding-top: 20px;
		display: flex;
		justify-content: center;
	}

	.header {
		text-align: start;
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

	button {
		width: 100%;
		border-radius: 30px;
		padding: 10px;
		margin-top: 5px;
		color: white;
		font-weight: 800;
		font-size: 16px;
		border: none;
		background-color: #000000;
	}

	button:hover {
		cursor: pointer;
	}

	p:nth-last-child(2) {
		padding-top: 10px;
		font-size: 13px;
		color: #87898a;
	}

	p:nth-last-child(1) {
		text-align: start;
		padding-top: 50px;
		color: #87898a;
	}

	p:nth-last-child(1) a {
		color: black;
	}

	p:nth-last-child(1) a:hover {
		color: #d1ce21;
	}

	form {
		width: 100%;
	}

	.username,
	.email {
		margin-top: 30px;
	}

	.username {
		padding: auto;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		line-height: 1.5;
	}

	.email {
		background-color: inherit;
		padding: auto;
	}

	input {
		width: 100%;
		margin-top: 20px;
		padding: 10px;
		border: 2px solid #ccc;
		border-radius: 4px;
		font-size: 15px;
	}

	.dob h6 {
		padding-top: 30px;
		font-size: 16px;
		color: #000000;
	}

	.dob-text {
		color: #87898a;
		font-size: 14px;
		font-weight: lighter;
		margin: auto;
		padding: auto;
	}

	.signup {
		margin-top: 120px;
		padding: 16px;
		font-weight: bolder;
	}

	.signup:hover,
	button.create-account:hover {
		background-color: #212020;
	}
`;
