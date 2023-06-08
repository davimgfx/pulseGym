import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer, Navbar } from "./components";

import { Outlet } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
