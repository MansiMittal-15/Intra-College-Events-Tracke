import React from 'react';
import Navbar from "./Navbar";
import Front from "./Front";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';


function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Front />  */}
      <Footer />
    </>
  )
}

export default Home
