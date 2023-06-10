import React from "react";
import {
  About,
  Bmi,
  Class,
  Gallery,
  Hero,
  Prices,
  Testimonials,
  Trainers,
  Whychooseus,
} from "../components";

const Home = () => (
  <>
    <Hero />
    <About />
    <Class />
    <Whychooseus />
    <Trainers />
    <Testimonials />
    <Gallery />
    <Bmi />
    <Prices />
  </>
);

export default Home;
