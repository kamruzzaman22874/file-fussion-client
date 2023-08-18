import React from "react";
import AddFile from "./AddFile";
import CloudStorage from "./CloudStorage";
import Banner from "./Banner";
import Discuss from "./Discuss";
import ShearFile from "./ShearFile";
import Friction from "./Friction";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <AddFile />
      <CloudStorage />
      <Discuss/>
      <ShearFile/>
      <Friction/>
      <Testimonial/>
    </div>
  );
};
export default Home;

