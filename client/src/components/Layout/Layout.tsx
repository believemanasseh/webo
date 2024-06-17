import { styled } from "@linaria/react";
import Navbar from "../Navbar/Navbar.tsx";
import Trends from "../Trends/Trends.tsx";

import logo from "../../assets/webo.png";
import notifications from "../../assets/notification.png";
import black from "../../assets/black.png";

type LayoutProps = {
  headerTitle?: String;
  children: JSX.Element;
  hideTrends?: boolean;
};

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <StyledLayout>
      <div className="header">
        <img className="logo" src={logo} alt="webo logo" height={50} width={50} />
        <div>
          <p className="title">{props.headerTitle}</p>
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
            />
          </div>
        </div>
      </div>
      <div className="main-section">
        <Navbar />
        <div className="main">
          {props.children}
          {!props.hideTrends && <Trends />}
        </div>
      </div>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  .header {
    border-bottom: 1px solid var(--border-color);
    padding: 5px 20px;
    display: grid;
    grid-template-columns: 30% 70%;
    align-items: center;
  }

  .title {
    font-size: 20px;
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
    margin: auto;
    text-align: center;
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
    border-radius: 20px;
  }
`;
