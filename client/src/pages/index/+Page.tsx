import { ChangeEvent } from "react";
import { styled } from "@linaria/react";
import Layout from "../../components/Layout/Layout.tsx";
import Posts from "../../components/Posts/Posts.tsx";
import black from "../../assets/black.png";

export default function Page(): JSX.Element {
  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <Layout headerTitle="Home">
      <StyledPage>
        <form onSubmit={handleSubmit}>
          <textarea name="status" placeholder="What's on your mind?" />
          <button type="submit">Post</button>
        </form>
        <Posts borderTopVisible />
      </StyledPage>
    </Layout>
  );
}

const StyledPage = styled.div`
  min-height: 94vh;
  width: 60%;

  h3 {
    font-size: 28px;
    text-align: left;
    margin: 15px;
  }

  form {
    padding: 15px 0px;
  }

  textarea {
    width: 100%;
    padding: 30px;
    resize: none;
    overflow: hidden;
    background-color: inherit;
    border: none;
    font-size: 15px;
  }

  textarea:focus {
    outline: none;
  }

  button {
    width: 100px;
    border-radius: 30px;
    padding: 10px;
    margin-left: 340px;
    margin-top: 25px;
    color: white;
    font-weight: bolder;
    border: none;
    background-color: #000000;
  }

  button:hover {
    cursor: pointer;
    background-color: var(--primary-color-lighter);
  }

  img {
    border-radius: var(--border-radius);
  }
`;
