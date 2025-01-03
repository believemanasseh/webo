import { ChangeEvent, Suspense, useState, useEffect } from "react";
import { styled } from "@linaria/react";
import useStore from "@/src/store.ts";
import { message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth";
import Loading from "@/components/Spinner/Spinner";

import "@/src/index.css";
import logo from "@/assets/webo.png";
import googleLogo from "@/assets/google.svg";
import appleLogo from "@/assets/apple.svg";

export default function Page(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [navigateToHome, setNavigateToHome] = useState(false);
  const authState = useStore((state) => state.auth);
  const setAuthState = useStore((state) => state.setAuthState);
  const [messageApi, contextHolder] = message.useMessage();
  const mutation = useMutation({
    mutationFn: login,
    mutationKey: ["login"],
    onSuccess: (data, _variables, _context) => {
      messageApi.open({
        type: data.status,
        content: data.message,
        duration: 10,
      });
      setNavigateToHome(true);
    },
    onError: (error, _variables, _context) => {
      messageApi.open({ type: "error", content: error.message, duration: 10 });
    },
  });

  useEffect(() => {
    if (navigateToHome) {
      window.location.href = "/home";
    }
  }, [navigateToHome]);

  function handleSubmit(e: ChangeEvent<HTMLFormElement>): void {
    e.preventDefault();
    const formData: FormData = new FormData(e.target);
    const password = formData.get("password")?.toString();

    if (currentSlide === 1) {
      const initValue = formData.get("id")?.toString();
      setAuthState({ ...authState, initialValue: initValue });
    }

    if (currentSlide === 2) {
      if (authState.initialValue?.includes("@")) {
        mutation.mutate({
          email: authState.initialValue,
          password: password,
        });
      } else {
        mutation.mutate({
          handle: authState.initialValue,
          password: password,
        });
      }
    }

    setCurrentSlide(currentSlide + 1);
  }

  return (
    <Suspense fallback={<Loading />}>
      {contextHolder}
      <StyledLogin>
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" width={50} height={50} />
            </a>
          </div>
          {currentSlide === 1 ? (
            <div className="slide-one">
              <h1 className="header">Sign in to Webo</h1>
              <div className="auth-btn">
                <img src={googleLogo} alt="google svg" height={20} width={20} />
                <span>Sign in with Google</span>
              </div>
              <div className="auth-btn">
                <img src={appleLogo} alt="apple svg" height={20} width={20} />
                <span>Sign in with Apple</span>
              </div>
              <h2>
                <span>or</span>
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="id"
                  placeholder="email or username"
                  required
                />
                <button className="next-btn" type="submit">
                  Next
                </button>
                <button className="forgot-pwd-btn" type="button">
                  Forgot password?
                </button>
                <p className="no-account">
                  Don&apos;t have an account? <a href="/signup">Sign up</a>
                </p>
              </form>
            </div>
          ) : (
            <div className="slide-two">
              <h1 className="header">Enter your password</h1>
              <form onSubmit={handleSubmit}>
                {authState.initialValue &&
                authState.initialValue.includes("@") ? (
                  <input
                    type="text"
                    name="email"
                    className="email"
                    placeholder={"email " + authState.initialValue}
                    disabled
                  />
                ) : (
                  <input
                    type="text"
                    name="username"
                    className="username"
                    placeholder={"username " + authState.initialValue}
                    disabled
                  />
                )}
                <input
                  type="password"
                  name="password"
                  className="password"
                  placeholder="Password"
                  required
                />
                <a className="forgot-pwd" href="/">
                  Forgot password?
                </a>
                <button className="login-btn" type="submit">
                  Log in
                </button>
              </form>
              <p className="no-account">
                Don&apos;t have an account?{" "}
                <a className="signup" href="/signup">
                  Sign up
                </a>
              </p>
            </div>
          )}
        </div>
      </StyledLogin>
    </Suspense>
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
    height: 60%;
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

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 15px;
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

  button.forgot-pwd-btn {
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

  button.forgot-pwd-btn:hover {
    background-color: #f8f8f8;
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
    margin: 10px 0px;
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
  .forgot-pwd:hover {
    color: #d1ce21;
  }

  p.no-account {
    margin-top: 30px;
    color: #87898a;
  }

  p.no-account a {
    color: black;
  }

  p.no-account a:hover {
    color: #d1ce21;
  }
`;
