import { useEffect } from "react";
import { styled } from "@linaria/react";
import { usePageContext } from "vike-react/usePageContext";

import bookmarks from "@/assets/bookmarks.png";
import chatMessage from "@/assets/chat-message.png";
import home from "@/assets/home.png";
import community from "@/assets/community.png";

export default function Navbar(): JSX.Element {
  const pageContext = usePageContext();

  useEffect(() => {
    if (pageContext?.urlPathname == "/home") {
      const classList = document.querySelector("li.home")!!.classList;
      classList.add("active");
    } else if (pageContext?.urlPathname == "/pods") {
      const classList = document.querySelector("li.pods")!!.classList;
      classList.add("active");
    } else if (pageContext?.urlPathname == "/bookmarks") {
      const classList = document.querySelector("li.bookmarks")!!.classList;
      classList.add("active");
    } else if (pageContext?.urlPathname == "/messages") {
      const classList = document.querySelector("li.messages")!!.classList;
      classList.add("active");
    }
  }, [pageContext]);

  return (
    <StyledNavbar>
      <ul className="navbar">
        <li className="home">
          <a href="/home">
            <img src={home} alt="home page" width={20} height={20} />
            Home
          </a>
        </li>
        <li className="pods">
          <a href="/pods">
            <img src={community} alt="pods" width={20} height={20} />
            Pods
          </a>
        </li>
        <li className="bookmarks">
          <a href="/bookmarks">
            <img src={bookmarks} alt="bookmarks" width={20} height={20} />
            Bookmarks
          </a>
        </li>
        <li className="messages">
          <a href="/messages">
            <img src={chatMessage} alt="chat-message" width={20} height={20} />
            Messages
          </a>
        </li>
      </ul>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  border-right: 1px solid var(--border-color);
  position: fixed;
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 10px;
    padding: 20px;
  }

  ul {
    list-style-type: none;
  }

  li:hover {
    background-color: whitesmoke;
  }

  .navbar {
    margin: 35px 0px;
    cursor: pointer;
  }

  .active {
    background-color: whitesmoke;
  }
`;
