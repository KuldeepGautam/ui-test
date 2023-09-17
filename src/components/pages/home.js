import React from "react";
import Slider from "../slider";
import Navbar from "../navbar";
import WebMaster from "./webMaster";
import TheBest from "./whyYouBest";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <WebMaster />
      <TheBest />
    </>
  );
};

export default Home;
