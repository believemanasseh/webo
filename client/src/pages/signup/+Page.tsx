import { useState, ChangeEvent, Suspense } from "react";
import { styled } from "@linaria/react";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";

import { signUp } from "@/api/auth";
import Loading from "@/components/Spinner/Spinner";

import "@/src/index.css";
import logo from "@/assets/webo.png";
import googleLogo from "@/assets/google.svg";
import appleLogo from "@/assets/apple.svg";

export default function Page(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();
  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data, _variables, _context) => {
      messageApi.open({
        type: data.status,
        content: data.message,
        duration: 10,
      });
    },
    onError: (error, _variables, _context) => {
      messageApi.open({
        type: "error",
        content: error.message,
        duration: 10,
      });
    },
  });

  function handleSubmit(e: ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email")?.toString();
    const username = formData.get("username")?.toString();
    const dateOfBirth = formData.get("dob")?.toString();
    const password = formData.get("password")?.toString();

    mutation.mutate({
      email: email,
      handle: username,
      dateOfBirth: dateOfBirth,
      password: password,
    });
  }

  return (
    <Suspense fallback={<Loading />}>
      {contextHolder}
      <StyledPage>
        <div className="container">
          {currentSlide === 1 ? (
            <div className="slide-one">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="logo" width={50} height={50} />
                </a>
              </div>
              <h1 className="header">Join Webo today</h1>
              <div className="auth-btn">
                <img src={googleLogo} alt="google svg" height={20} width={20} />
                <span>Sign up with Google</span>
              </div>
              <div className="auth-btn">
                <img src={appleLogo} alt="apple svg" height={20} width={20} />
                <span>Sign up with Apple</span>
              </div>
              <h2>
                <span>or</span>
              </h2>
              <button
                className="create-account"
                type="button"
                onClick={() => setCurrentSlide(currentSlide + 1)}
              >
                Create account
              </button>
              <p>
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </p>
              <p>
                Have an account already? <a href="/login">Log in</a>
              </p>
            </div>
          ) : (
            <div className="slide-two">
              <h1 className="header">Create your account</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  className="username"
                  placeholder="Username"
                  required
                />
                <input
                  type="text"
                  name="email"
                  className="email"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  name="password"
                  className="password"
                  placeholder="Alphanumeric password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />
                <div className="dob">
                  <h6>Date of birth</h6>
                  <p className="dob-text">
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                  </p>
                  <input name="dob" className="dob" type="date" required />
                </div>
                <button className="signup" type="submit">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </StyledPage>
    </Suspense>
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
    height: 60%;
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
  }

  button.signup {
    margin: 50px auto;
    padding: 16px;
    font-weight: bolder;
  }

  .signup:hover,
  button.create-account:hover {
    background-color: #212020;
  }
`;
