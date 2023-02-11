import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import logo from '../../public/webo.png';
import googleLogo from '../../public/google.svg';
import appleLogo from '../../public/apple.svg';


export default function Signup() {
  const [name, setName] = useState({value: ''})
  const [email, setEmail] = useState({value: ''})
  const [next, setNext] = useState(false)

  function handleClick(event) {
    setNext(true)
  }

  function handleChange(event) {
    setName({value: event.target.value})
  }

  function reHandleChange(event) {
    setEmail({value: event.target.value})
  }

  return (
    <React.Fragment>
      <StyledSignup>
        <div className='container'>
          {next ? <></>
          :
          <div className='logo'>
            <Image
              src={logo}
              alt='logo'
              width={50}
              height={50}
              placeholder='blur'
            />
          </div>}
          {next ?
          <div className='container3'>
            <h1 className='header'>Create your account</h1>
            <form>
              <textarea className='ctx3' value={name.value} onChange={handleChange} placeholder='Name' />
              <textarea className='ctx3s' value={email.value} onChange={reHandleChange} placeholder='Email' />
              <div className='dob'>
                <h6>Date of birth</h6>
                <p className='dobText'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
              </div>
              <button className='signup' type='button' onClick={handleClick}>Sign up</button>
            </form>
          </div>
          :
          <div className='container2'>
            <h1 className='header'>Join Webo today</h1>
            <div className='googl'>
              <Image 
                src={googleLogo} 
                alt='google svg'
                height={20}
                width={20}
              />
            </div>
            <div className='apple'>
              <Image 
                src={appleLogo}
                alt='apple svg'
                height={20}
                width={20}
              />
              <span>Sign up with Apple</span>
            </div>
            <h2><span>or</span></h2>
            <button className='createAccount' type='button' onClick={handleClick}>Create account</button>
            <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
            <p>Have an account already? <Link href='/login'>Log in</Link></p>
          </div>}
        </div>
      </StyledSignup>
    </React.Fragment>
  )
}

const StyledSignup = styled.div`
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
    background:#fff; 
    padding: 0 10px; 
  }
 
  .container2 {
    width: 50%;
    margin: auto;
  }

  .container3 {
    width: 75%;
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

  .googl:hover, .apple:hover {
    cursor: pointer;
  }

  button {
    width: 100%;
    border-radius: 30px;
    padding: 10px;
    margin-top: 5px;
    color: white;
    font-weight: bolder;
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
    color: #f5f125;
  }

  form {
    width: 100%;
  }

  .ctx3, .ctx3s {
    margin-top: 30px;
  }

  .ctx3 {
    padding: auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    line-height: 1.5;
  }

  .ctx3s {
    background-color: inherit;
    padding: auto;
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

  .dob h6 {
    padding-top: 50px;
    margin-bottom: -35px;
    font-size: 16px;
    color: #000000;
  }

  .dobText {
    color: #87898a;
    font-size: 14px;
    font-weight: lighter;
    margin: auto;
    padding: auto;
  }

  .signup {
    margin-top: 150px;
    padding: 16px;
    font-weight: bolder;
  }
`