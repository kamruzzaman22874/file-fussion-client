import React from "react";

const ShearFile = () => {
  return (
    <>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-[90%] mx-auto '>
        
        <div>
          <img className="w-full h-full" src="https://i.postimg.cc/HnjGtK1h/images.png" alt="" />
        </div>

        <div className="mx-auto mt-32">
          <p className="text-3xl font-semibold ">
            See why{" "}
            <span className="text-4xl text-violet-500">File Fusion</span> is
            right <br /> for your Feature
          </p>
          <button className="py-1 px-3 mt-4 bg-black text-white rounded-2xl font-semibold">
            Watch the video
          </button>
        </div>
      </div>
    </>
  );
};

export default ShearFile;
