import React from 'react';

const Discuss = () => {
    return (
    <>
       <div className='w-[90%] mx-auto grid lg:grid-cols-3 sm:grid-cols-1 p-2 mt-10 mb-14'>
        {/*  */}
        <div className='mx-auto mt-6'>
            <h2 className='text-4xl font-semibold'>
            Why we are <span className='text-5xl text-violet-500'>legends</span> <br/> in these moments?
            </h2>
            <p className='text-sm mt-4'>
            Pioneering Leadership, Trailblazing Innovation, and Exceptional Dedication: Illuminating the Factors That Elevate Us to Legendary Status in the Current Epoch of Remarkable Achievements and Advancements.
            </p>
        </div>
        {/*  */}
        <div>
            <img className='mt-3 lg:w-[35%] mx-auto  overflow-hidden  rounded-full lg:absolute transform transition  duration-500 hover:scale-110 cursor-pointer ' src="https://i.ibb.co/pf2Skj3/3d-render-online-education-survey-test-concept-removebg-preview.png" />
        </div>
       {/*  */}
       <div className='mx-auto'>
            <div className=" overflow-hidden  rounded text-black">
                                <div className="p-2">
                                    <p className='font-bold'>Customer Satisfaction</p>
                                    <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                                </div>
                            </div>

                            <div className=" overflow-hidden  rounded  text-slate-50text-black">
                                <div className="p-2">
                                    <p className='font-bold'>Our responsibility</p>
                                    <progress className="progress progress-primary w-56" value="100" max="100"></progress>
                                </div>
                            </div>

                            <div className=" overflow-hidden  rounded  text-slate-50text-black">
                                <div className="p-2">
                                    <p className='font-bold'>Our privacy</p>
                                    <progress className="progress progress-primary w-56" value="100" max="100"></progress>
                                </div>
                            </div>
                            
            </div>
        
        </div>     
    </>
    );
};

export default Discuss;