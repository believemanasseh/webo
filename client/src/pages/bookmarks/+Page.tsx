import { styled } from "@linaria/react";
import Layout from "@/components/Layout/Layout.tsx";
import Posts from "@/components/Posts/Posts.tsx";

export default function Page(): JSX.Element {
  return (
    <Layout headerTitle="Bookmarks">
      <StyledPage>
        <Posts />
      </StyledPage>
    </Layout>
  );
}

const StyledPage = styled.div`
  width: 60%;

  .bookmark-title,
  .handle {
    text-align: left;
  }

  .bookmark-title {
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
