import { styled } from "@linaria/react";

import Layout from "@/components/Layout/Layout";

import black from "@/assets/black.png";
import ellipsis from "@/assets/ellipsis.png";
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
        <div className="followers-list">
          <img
            className="profile-pic"
            src={black}
            alt="profile-pic"
            height={50}
            width={50}
          />
          <div className="follower">
            <div>
              <div className="user-handle">
                <h3 className="user2">Francesca</h3>
                <p className="handle2">@frankiee</p>
              </div>
              <div>
                <button>Following</button>
                <span>
                  <img src={ellipsis} alt="ellipsis" height={12} width={12} />
                </span>
              </div>
            </div>
            <p className="bio">
              Finance Professional || Data Analyst || Avid Reader. Mediocrity is
              not an option for me. The world is my Oyster..
            </p>
          </div>
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
  margin: auto;

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

  .main-header a:nth-child(1) {
    color: var(--font-one);
    font-weight: 600;
  }

  .followers-list {
    display: flex;
    justify-content: flex-start;
    margin: auto;
    padding: 20px;
  }

  .profile-pic {
    border-radius: var(--border-radius);
  }

  .follower {
    text-align: left;
  }

  .user-handle {
    margin: auto;
    width: 20px;
  }

  .user2,
  .handle2 {
    margin: auto;
  }
`;
