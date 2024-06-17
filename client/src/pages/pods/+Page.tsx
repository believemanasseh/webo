import { styled } from "@linaria/react";
import Layout from "../../components/Layout/Layout";

export default function Page(): JSX.Element {
  return (
    <Layout headerTitle="Pods">
      <StyledPage>
        <div className="outer">
          Outer<div className="inner">Inner</div>
        </div>
      </StyledPage>
    </Layout>
  );
}

const StyledPage = styled.div`
  min-height: 100vh;

  .outer {
    background-color: white;
  }
`;
