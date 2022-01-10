import { h, FunctionComponent, Fragment } from "preact";

import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

const Component: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  );
};

export const Layout = Component;
