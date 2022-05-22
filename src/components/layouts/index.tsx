import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

const Component: React.FC = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);

export const Layout = Component;
