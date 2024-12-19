import { styled } from "@linaria/react";

import Layout from "@/components/Layout/Layout";
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import Posts from "@/components/Posts/Posts";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <StyledPage>
        <ProfileHeader />
        <div>
          <div className="main-header">
            <a href="/profile">Posts</a>
            <a href="/profile/replies">Replies</a>
            <a href="/profile/likes">Likes</a>
          </div>
        </div>
        <div className="posts">
          <Posts />
        </div>
      </StyledPage>
    </Layout>
  );
}

const StyledPage = styled.main`
  border-right: 1px solid #ccc;
  border-left: 1px solid #ccc;
  width: 30vw;
  height: 100vh;

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
