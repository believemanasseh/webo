import { styled } from "@linaria/react";

import Layout from "@/components/Layout/Layout";
import leftArrow from "@/assets/left.png";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <StyledPage>
        <div>
          <img
            className="left-arrow"
            src={leftArrow}
            alt="left arrow"
            height={20}
            width={20}
          />
          <div>
            <p className="user">Manasseh</p>
            <p className="handle">@believemanasseh</p>
          </div>
        </div>
        <div className="main-header">
          <a href="/profile/followers">Followers</a>
          <a href="/profile/following">Following</a>
        </div>
      </StyledPage>
    </Layout>
  );
}

const StyledPage = styled.div`
  border-right: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  width: 30vw;
  height: 100vh;

  div:nth-child(1) {
    display: flex;
    gap: 30px;
    text-align: left;
    justify-content: flex-start;
    margin: 10px;
    width: 100%;
  }

  .left-arrow {
    margin-top: 20px;
    margin-left: 10px;
  }

  .left-arrow:hover {
    cursor: pointer;
  }

  .user {
    font-weight: 600;
    font-size: 24px;
  }

  .main-header {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    color: var(--font-two);
  }

  .main-header a:hover {
    font-weight: 600;
    color: var(--font-one);
    cursor: pointer;
  }

  .main-header a:nth-child(2) {
    color: var(--font-one);
    font-weight: 600;
  }
`;
