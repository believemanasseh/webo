import { useState, ChangeEvent } from "react";
import { navigate } from "vike/client/router";
import { styled } from "@linaria/react";

export default function Trends() {
  const [value, setValue] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  async function handleClick(name: string) {
    let navigationPromise;
    if (name === "tos") {
      navigationPromise = await navigate("tos");
    } else if (name === "privacy") {
      navigationPromise = await navigate("privacy");
    } else if (name === "cookie") {
      navigationPromise = await navigate("cookie");
    } else {
      navigationPromise = await navigate("accessibility");
    }
    console.log(navigationPromise, "nav");
  }

  return (
    <StyledPage>
      <form>
        <input type="text" placeholder="Search Webo" value={value} onChange={handleChange} />
      </form>
      <div className="trends">
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
        <h3>Trends for you</h3>
      </div>
      <ul>
        <li onClick={() => handleClick("tos")}>Terms of Service</li>
        <li onClick={() => handleClick("privacy")}>Privacy Policy</li>
        <li onClick={() => handleClick("cookie")}>Cookie Policy</li>
        <li onClick={() => handleClick("accessibility")}>Accessibility</li>
      </ul>
      <p className="copyright">&copy; 2023 Webo</p>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  font-size: 20px;
  margin-top: 15px;
  text-align: left;

  form > input {
    border-radius: var(--border-radius);
    padding: 10px;
    border: none;
    margin: auto;
    background-color: whitesmoke;
    width: 100%;
  }

  form > input:focus {
    border: 1px solid var(--primary-color);
    outline-color: var(--primary-color);
  }

  .trends {
    background-color: whitesmoke;
    border-radius: 12px;
    padding: 15px;
    margin-top: 20px;
    width: 100%;
  }

  .trends > h3 {
    text-align: left;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-top: 30px;
  }

  li,
  .copyright {
    color: var(--font-two);
    margin: 2px;
    font-size: 11.5px;
  }
`;
