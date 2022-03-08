import { Container } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          body {
            background: #e7e7e7;
          }
        `}
      />
      <Container maxW="container.lg" my={5}>
        {children}
      </Container>
    </>
  );
}
