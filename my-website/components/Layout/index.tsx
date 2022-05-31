import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import classes from "./Layout.module.sass";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={classes.container}>
        <main className={classes.main}>
          <Header />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
