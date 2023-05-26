import React from "react";
import { About, Class, Hero, Navbar } from "./components";

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <div>
      <About />
      <Class />
    </div>
  </div>
);

export default App;
