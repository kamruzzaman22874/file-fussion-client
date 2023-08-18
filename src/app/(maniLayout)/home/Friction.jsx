import React from 'react';

const Friction = () => {
    return (
    <>
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-[90%] mx-auto bg-gradient-to-l from-fuchsia-200 to-blue-200 rounded-md mb-10'>
       <div className='mx-auto mt-28'>
       <p className='text-4xl font-semibold '>Frictional Security</p>
       <p className='mt-3'>
       Revolutionizing cybersecurity, our frictional security <br/> solution optimizes protection without sacrificing usability. <br/> Through cutting-edge AI and continuous monitoring, <br/> we ensure data privacy, thwart threats, <br/> and deliver seamless user experiences, <br/> creating a harmonious balance between <br/>security and functionality in the digital landscape.
       </p>
            <button className="py-2 px-3 mt-8 bg-black text-white rounded-2xl font-semibold">
            Learn More
            </button>
       </div>

        <div className='mx-auto'>
            
                    <div>
            <img src="https://i.postimg.cc/CKVN06Jn/images-removebg-preview.png" alt="" />
        </div>
        </div>
    </div>     
    </>
    );
};

export default Friction;