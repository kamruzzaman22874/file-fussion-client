import React from "react";
import AddFile from "./AddFile";
import CloudStorage from "./CloudStorage";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
        <Banner/>
      <AddFile />
      <CloudStorage />
    </div>
  );
};

export default Home;
