import React, { useState } from 'react';
import Image from 'next/image'
import styled from 'styled-components';
import logo from '../../public/webo.png';
import googleLogo from '../../public/google.svg';



export default function Login() {
  const [value, setValue] = useState("")

  function handleChange(event) {
    setValue({value: event.target.value});
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
            <h2><span>or</span></h2>
            <form>
              <textarea value={value.value} onChange={handleChange} placeholder='email or username' />
            </form>
            <button className='nextBtn' type='button'>Next</button>
            <button className='forgotPwd' type='button'>Forgot password?</button>
          </div>
        </div>
      </StyledLogin>
    </React.Fragment>
  )
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
`