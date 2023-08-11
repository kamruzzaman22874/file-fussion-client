import React from 'react';

const Home = () => {
    return (
        <>
            <header className="" >
                <div className="container px-6 py-16 mx-auto bg-no-repeat bg-right" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/online-calendar-digital-schedule-agenda_107791-17725.jpg?w=826&t=st=1691597962~exp=1691598562~hmac=b86add422368ed02b4d28b434396b55e0b87dc979610beb2e28c5039d683dd56)'}}>
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 h-96">
                        <div className="w-full mt-5 ">
                            <span className='mb-5'>Start</span>
                            <p className='text-5xl font-bold mt-14' >File Fusion</p>

                            <p className="mt-10 text-black mb-7">These Website make by
                                <br />
                                Jamal, Rakib, Emon , Bilasi, Aysha, Atiq
                            </p>

                            <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-black px-5 text-sm font-medium tracking-wide text-black transition duration-300 hover:border-black hover:text-black focus:border-black focus:text-black focus-visible:outline-none disabled:cursor-not-allowed disabled:border-black disabled:text-black disabled:shadow-none">
                                <span>Upload</span>
                            </button>
                            <p className='mt-3'>folder/file/xyz.xd</p>
                        </div>




                        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                            <div></div>
                            

            <div className=''>
            <div className="mt-12 overflow-hidden  rounded text-black">
                                <div className="p-2">
                                    <p className='font-bold'>Photos</p>
                                    <p className='text-sm'>Upload your photos</p>
                                    <progress className="progress progress-warning w-56" value="70" max="100"></progress>
                                </div>
                            </div>

                            <div className="mt-10 overflow-hidden  rounded  text-slate-50text-black">
                                <div className="p-2">
                                    <p className='font-bold'>Videos</p>
                                    <p className='text-sm'>Upload your videos</p>
                                    <progress className="progress progress-primary w-56" value="40" max="100"></progress>
                                </div>
                            </div>

                            <div className="mt-10 overflow-hidden  rounded  text-slate-50text-black">
                                <div className="p-2">
                                    <p className='font-bold'>Documents</p>
                                    <p className='text-sm'>Upload your documents</p>
                                    <progress className="progress progress-error w-56" value="10" max="100"></progress>
                                </div>
                            </div>
            </div>
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Home;