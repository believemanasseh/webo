import { styled } from "@linaria/react";

import logo from "@/assets/webo.png";
import "../../index.css";

export default function Page(): JSX.Element {
  return (
    <StyledPage>
      <div className="navbar">
        <div>
          <img src={logo} alt="logo" height={40} width={40} />
          <nav className="nav-links">
            <a href="#mission">Mission</a>
            <a href="#benefits">Benefits</a>
            <a href="#pods">Pods</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <a className="signup-btn" href="/signup">
          SIGN UP
        </a>
      </div>
      <section className="primary-heading">
        <h1>
          Own Your Data, Connect Freely With <span>Webo</span>
        </h1>
        <p>
          Webo is a decentralised social network where you control your data and
          connect with others on your terms. Experience a censorship-resistant
          and user-owned online experience.
        </p>
      </section>
    </StyledPage>
  );
}

const StyledPage = styled.main`
  width: 80%;
  margin: auto;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 10vh;
  }

  .navbar > div {
    display: flex;
    align-items: center;
  }

  .nav-links a {
    margin: 20px;
    font-size: 18px;
    font-weight: 600;
  }

  .nav-links a:hover {
    text-decoration: underline;
    text-decoration-color: var(--secondary-color);
    text-decoration-thickness: 5px;
  }

  .signup-btn {
    padding: 15px;
    width: 10%;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid whitesmoke;
    text-decoration: none;
    background-color: whitesmoke;
    text-align: center;
  }

  .signup-btn:hover {
    background-color: var(--border-color);
  }

  .primary-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    margin: auto;
    height: 70vh;
  }

  .primary-heading h1 {
    font-size: 50px;
    cursor: not-allowed;
  }

  .primary-heading h1 span {
    color: var(--secondary-color);
  }

  .primary-heading p {
    width: 50%;
    text-align: center;
    font-size: 20px;
    color: black;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
