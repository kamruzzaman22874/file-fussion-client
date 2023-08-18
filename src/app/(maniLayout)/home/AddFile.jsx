import React from 'react';

const AddFile = () => {
    return (
    <>
       <div className='bg-violet-200 p-10'>
       <div className='flex justify-between w-[85%] mx-auto text-xl font-medium'>
        <button>
            Add File/
        </button>
        <button>
            Clear All
        </button>
        </div> 
        {/* 3 card */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 w-[60%] mx-auto mt-8 mb-3 gap-4'>

            <div>
            <button className=" inline-flex bg-white h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-gray-500 px-8 text-sm font-medium tracking-wide text-gray-900 shadow-lg shadow-gray-200 transition duration-300  hover:shadow-md hover:shadow-violet-400 focus:border-gray-700 focus:shadow-md focus:shadow-gray-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 disabled:shadow-none">
        <span>folder/file/xyz.mp3</span>
      </button>
            </div>

            <div>
            <button className="inline-flex bg-white h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-gray-500 px-8 text-sm font-medium tracking-wide text-gray-900 shadow-lg shadow-gray-200 transition duration-300  hover:shadow-md hover:shadow-violet-400 focus:border-gray-700 focus:shadow-md focus:shadow-gray-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 disabled:shadow-none">
        <span>folder/file/xyz.mp4</span>
      </button>
            </div>

            <div>
            <button className=" inline-flex bg-white h-12 items-center justify-center gap-2 whitespace-nowrap rounded border border-gray-500 px-8 text-sm font-medium tracking-wide text-gray-900 shadow-lg shadow-gray-200 transition duration-300  hover:shadow-md hover:shadow-violet-400 focus:border-gray-700 focus:shadow-md focus:shadow-gray-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 disabled:shadow-none">
        <span>folder/file/xyz.mp5</span>
      </button>
            </div>

        </div>   
    </div>      
    </>
    );
};

export default AddFile;