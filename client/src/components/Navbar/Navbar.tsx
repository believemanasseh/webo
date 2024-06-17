import { useEffect } from "react";
import { styled } from "@linaria/react";
import { usePageContext } from "vike-react/usePageContext";
import { PageContext } from "vike/types";

import bookmarks from "../../assets/bookmarks.png";
import chatMessage from "../../assets/chat-message.png";
import home from "../../assets/home.png";
import community from "../../assets/community.png";

export default function Navbar(): JSX.Element {
  const pageContext: PageContext = usePageContext();
  console.log(pageContext?.urlPathname, "page??");
  useEffect(() => {}, []);

  return (
    <StyledNavbar>
      <ul className="navbar">
        <li>
          <img src={home} alt="home page" width={20} height={20} />
          <a href="/">Home</a>
        </li>
        <li>
          <img src={community} alt="pods" width={20} height={20} />
          <a href="/pods">Pods</a>
        </li>
        <li>
          <img src={bookmarks} alt="bookmarks" width={20} height={20} />
          <a href="/bookmarks">Bookmarks</a>
        </li>
        <li>
          <img src={chatMessage} alt="chat-message" width={20} height={20} />
          <a href="/messages">Messages</a>
        </li>
      </ul>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-right: 1px solid var(--border-color);

  li {
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 10px;
    padding: 20px;
  }

  li:hover {
    background-color: whitesmoke;
  }
  .navbar {
    margin: 35px 0px;
    cursor: pointer;
  }
`;
