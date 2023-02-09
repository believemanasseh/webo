import React, { useState } from 'react';
import Image from 'next/image'
import styled from 'styled-components';
import logo from '../../public/webo.png';
import googleLogo from '../../public/google.svg';



export default function Signup() {

  return (
    <React.Fragment>
      <StyledSignup>
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
            <h2><span>or</span></h2>
            <button className='createAccount' type='button'>Create account</button>
            <p>Have an account already? <a>Log in</a></p>
          </div>
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
    background:#fff; 
    padding: 0 10px; 
  }
 
  .container2 {
    width: 50%;
    margin: auto;
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

  .googl:hover {
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

  p {
    text-align: start;
    padding-top: 50px;
  }

  p a {
    color: #f5f125;
  }
`