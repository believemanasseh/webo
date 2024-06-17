import { styled } from "@linaria/react";
import Layout from "@/components/Layout/Layout.tsx";
import Posts from "@/components/Posts/Posts.tsx";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <StyledPage>
        <div>
          <h3 className="header">Bookmarks</h3>
          <p className="handle">@believemanasseh</p>
        </div>
        <Posts />
      </StyledPage>
    </Layout>
  );
}

const StyledPage = styled.div`
  border-right: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  width: 30vw;
  height: 100vh;

  .header,
  .handle {
    text-align: left;
  }

  .header {
    font-size: 28px;
    text-align: left;
    margin-top: 15px;
    margin-left: 15px;
  }

  .handle {
    color: var(--font-two);
    margin-left: 15px;
  }
`;
