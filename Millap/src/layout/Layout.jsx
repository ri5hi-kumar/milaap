import React from "react";
import Navbar from "../Components/Navbar";
import Router from "../routes/Router";
//import Doglist from "../Components/Doglist";
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Router />
      </main>
    </>
  );
}

export default Layout;
