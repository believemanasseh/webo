import { styled } from "@linaria/react";
import Layout from "@/components/Layout/Layout";

export default function Page(): JSX.Element {
  return (
    <Layout headerTitle="Pods">
      <StyledPage>Coming Soon!</StyledPage>
    </Layout>
  );
}

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
