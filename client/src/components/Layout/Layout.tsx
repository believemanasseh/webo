import { useState, useEffect } from "react";
import { styled } from "@linaria/react";
import Navbar from "../Navbar/Navbar.tsx";
import Trends from "../Trends/Trends.tsx";

import "../../index.css";

import logo from "../../assets/webo.png";
import notifications from "../../assets/notification.png";
import black from "../../assets/black.png";
import logout from "../../assets/logout.png";
import logoutRed from "../../assets/logout-red.png";
import settings from "../../assets/settings.png";
import premium from "../../assets/premium.png";

type LayoutProps = {
  headerTitle?: String;
  children?: JSX.Element;
  hideTrends?: boolean;
};

type StyledLayoutProps = {
  showProfileNav?: boolean;
};

export default function Layout(props: LayoutProps): JSX.Element {
  const [showProfileNav, setShowProfileNav] = useState(false);
  const [onLogout, setOnLogout] = useState(false);

  useEffect(() => {
    const btn = document.querySelector(".logout-btn");

    function onMouseOver() {
      setOnLogout(true);
    }

    function onMouseLeave() {
      setOnLogout(false);
    }

    btn?.addEventListener("mouseover", onMouseOver);
    btn?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      btn?.removeEventListener("mouseover", onMouseOver);
      btn?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <StyledLayout showProfileNav={showProfileNav}>
      <div className="header">
        <img className="logo" src={logo} alt="webo logo" height={50} width={50} />
        <div>
          <h3 className="title">{props.headerTitle}</h3>
          <div className="profile">
            <img
              className="notifications"
              src={notifications}
              alt="notifications"
              height={30}
              width={30}
            />
            <img
              className="profile-pic"
              src={black}
              alt="profile picture"
              height={40}
              width={40}
              onClick={() => setShowProfileNav(!showProfileNav)}
            />
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="profile-nav">
          <div>
            <div>
              <div className="profile-nav-item">
                <img
                  src={black}
                  alt="profile picture"
                  height={30}
                  width={30}
                  style={{ borderRadius: "20px" }}
                />
                <p>View Profile</p>
              </div>
              <div className="profile-nav-item">
                <img src={premium} alt="premium" height={30} width={30} />
                <p>Premium</p>
              </div>
              <div className="profile-nav-item">
                <img src={settings} alt="settings" height={30} width={30} />
                <p>Manage settings</p>
              </div>
            </div>
            <button className="logout-btn">
              Logout
              <img src={onLogout ? logoutRed : logout} alt="logout" height={20} width={20} />
            </button>
          </div>
        </div>
        <div>
          <Navbar />
        </div>
        <div className="main">
          {props.children}
          {!props.hideTrends && <Trends />}
        </div>
      </div>
    </StyledLayout>
  );
}

const StyledLayout = styled.div<StyledLayoutProps>`
  .header {
    position: fixed;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid var(--border-color);
    padding: 5px 20px;
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: center;
    width: 100%;
    background-color: white;
  }

  .logo {
    border-radius: 27px;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
  }

  .header > div {
    display: flex;
    justify-content: space-between;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .main-section {
    display: grid;
    grid-template-columns: 15% 85%;
    padding: auto;
    height: auto;
    margin-top: 60px;
  }

  .main {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    gap: 20px;
    width: 65%;
    margin: auto;
  }

  .profile-pic {
    border-radius: var(--border-radius);
    cursor: pointer;
  }

  .notifications {
    cursor: pointer;
  }

  .profile-nav {
    display: ${(props) => (props.showProfileNav ? `initial` : `none`)};
    background-color: whitesmoke;
    z-index: 1;
    position: absolute;
    height: 50%;
    width: 13%;
    right: 10px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px #e2dede, -5px -5px 10px #e2dede;
  }

  .profile-nav > div {
    height: 100%;
    display: grid;
    grid-template-rows: 90% 10%;
  }

  .profile-nav-item {
    padding: 20px;
    display: flex;
    gap: 15px;
    flex-flow: row nowrap;
    align-items: center;
    font-weight: 500;
  }

  .profile-nav-item:hover {
    background-color: #edeaea;
    cursor: pointer;
  }

  .profile-nav button {
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 80%;
    margin: auto;
    padding: 5px;
    cursor: pointer;
  }

  .profile-nav button:hover {
    border-color: red;
    color: red;
  }
`;
