import React from "react";
import { About, Class, Hero, Navbar, Whychooseus, Trainers, Testimonials, Gallery, Bmi, Prices, Footer } from "./components";


import { Outlet } from "react-router-dom"

const App = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default App;
