import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "goober";

import { Header } from "./Header";
import { Footer } from "./Footer";

const Container = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
`

const Component: React.FC = () => (
  <Container>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </Container>
);

export const Layout = Component;
