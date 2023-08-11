import React from 'react';

const CloudStorage = () => {
    return (
        <>
            <div className='lg:w-[70%] sm:w-full mx-auto bg-violet-100  mt-10 rounded-lg'>
                <p className='text-4xl p-4 font-semibold text-center'>Secure Cloud Storage & <br /> communication</p>
                <h3 className='text-center text-sm'> Secure Cloud Storage & Communication is our <br /> best priority from our development team </h3>


                <div className='flex justify-between w-[85%] mx-auto'>

                    <div>
                        <div className='p-3 w-24 rounded-md shadow-lg mt-8'>
                            <img src="https://i.ibb.co/TKhpXPH/perspective-matte-307-128x128.png" alt="folder-image" />
                        </div>
                    </div>


                    <div>
                        <div className='p-3 w-24 rounded-md shadow-lg mt-8'>
                            <img src="https://i.ibb.co/5xh37Rh/perspective-matte-305-128x128.png" alt="folder-image" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden w-[50%] mx-auto bg-white rounded shadow-md text-slate-500 shadow-slate-200">


                </div>

                {/* --------- */}

                <div className="overflow-hidden rounded lg:w-[50%] sm:w-full mx-auto bg-white text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    {/* <figure>
          <img
            className='mx-auto lg:w-[12%]  overflow-hidden  rounded-full lg:absolute transform transition  duration-500 hover:scale-110 cursor-pointer ' src="https://i.ibb.co/pf2Skj3/3d-render-online-education-survey-test-concept-removebg-preview.png"
          />
        </figure> */}
                    {/*  <!-- Body--> */}
                    <div className="p-2">
                        <p className='lg:w-[80%] sm:w-full text-center mx-auto'>
                            Advanced Encryption Ensuring Confidentiality in Storage and Communication of Your Sensitive Data, Messages, and Files. Uncompromised Security for Peace of Mind.
                        </p>
                    </div>
                    {/* <figure>
          <img
            className='mx-auto lg:w-[12%]  overflow-hidden  rounded-full lg:absolute transform transition  duration-500 hover:scale-110 cursor-pointer ' src="https://i.ibb.co/pf2Skj3/3d-render-online-education-survey-test-concept-removebg-preview.png"
          />
        </figure> */}
                </div>


            </div>


            <div className='lg:w-[50%] sm:w-full mx-auto'>
                {/* <div className=' py-5  bg-violet-200 flex'>
                    <p className='text-center'>
                        Do you Went 50GB files storage for free? 
                    </p>
                    <button className="py-2 px-3 bg-black text-white rounded-2xl font-semibold">
                        My Account
                    </button>
                </div> */}

<div className="overflow-hidden bg-violet-200 rounded-2xl shadow-md text-slate-900 shadow-slate-200 mt-10">
        <div className="p-6">
<div className=' flex justify-around'>
                    <p className='text-center font-bold mt-2'>
                        Do you Went 50GB files storage for free? 
                    </p>
                    <button className="py-2 px-3 bg-black text-white rounded-2xl font-semibold">
                        Create an Account
                    </button>
                </div>

        </div>
      </div>
            </div>
        </>
    );
};

export default CloudStorage;