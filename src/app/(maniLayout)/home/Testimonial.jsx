'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination} from 'swiper/modules';

const Testimonial = () => {
    return (
        <>
            <section>
                <div className="container mx-auto w-[90%]">
                            <Swiper
                                 spaceBetween={30}
                                //  centeredSlides={true}
                                 autoplay={{
                                   delay: 2500,
                                   disableOnInteraction: false,
                                 }}
                                 pagination={{
                                   clickable: false,
                                 }}
                                 navigation={true}
                                modules={[Autoplay, Pagination, Navigation]} className="mySwiper "
                            >
                                {/* 1---------------- */}
                                <SwiperSlide>
                                    <section className="body-font ">
                                        <div className="w-[80%] mx-auto grid lg:grid-cols-2 sm:grid-cols-1 ">
                                            <div className="w-[40%]  mx-auto">
                                                <img className="rounded-full" src="https://img.freepik.com/free-icon/boy_318-173523.jpg?t=st=1692266864~exp=1692267464~hmac=e88dc00cc137b2044c094c246e9555fcd169e2563318e4666c3b8857347e4047" alt="avatar" />
                                            </div>
                                            <div className="mt-6 flex flex-col items-center mx-12 lg:mx-0">
                                                <div className="relative text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                                    </svg>
                                                    <p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                                    </svg>
                                                </div>
                                                <span className="w-12 h-1 my-2 rounded-lg bg-indigo-600"></span>
                                                <p>Leroy Jenkins</p>
                                            </div>

                                        </div>
                                    </section>
                                </SwiperSlide>
                                {/* 2------------------------------------ */}
                                <SwiperSlide>
                                    <section className="body-font ">
                                        <div className="w-[80%] mx-auto grid lg:grid-cols-2 sm:grid-cols-1 ">
                                            <div className="w-[40%]  mx-auto">
                                                <img className="rounded-full" src="https://img.freepik.com/free-icon/boy_318-173523.jpg?t=st=1692266864~exp=1692267464~hmac=e88dc00cc137b2044c094c246e9555fcd169e2563318e4666c3b8857347e4047" alt="avatar" />
                                            </div>
                                            <div className="mt-6 flex flex-col items-center mx-12 lg:mx-0">
                                                <div className="relative text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                                    </svg>
                                                    <p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                                    </svg>
                                                </div>
                                                <span className="w-12 h-1 my-2 rounded-lg bg-indigo-600"></span>
                                                <p>Leroy Jenkins</p>
                                            </div>

                                        </div>
                                    </section>
                                </SwiperSlide>

                                {/* 3------------ */}

                                <SwiperSlide>
                                    <section className="body-font ">
                                        <div className="w-[80%] mx-auto grid lg:grid-cols-2 sm:grid-cols-1 ">
                                            <div className="w-[40%]  mx-auto">
                                                <img className="rounded-full" src="https://img.freepik.com/free-icon/boy_318-173523.jpg?t=st=1692266864~exp=1692267464~hmac=e88dc00cc137b2044c094c246e9555fcd169e2563318e4666c3b8857347e4047" alt="avatar" />
                                            </div>
                                            <div className="mt-6 flex flex-col items-center mx-12 lg:mx-0">
                                                <div className="relative text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                                    </svg>
                                                    <p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                                    </svg>
                                                </div>
                                                <span className="w-12 h-1 my-2 rounded-lg bg-indigo-600"></span>
                                                <p>Leroy Jenkins</p>
                                            </div>

                                        </div>
                                    </section>
                                </SwiperSlide>

                                {/* 4--------- */}

                                <SwiperSlide>
                                    <section className="body-font ">
                                        <div className="w-[80%] mx-auto grid lg:grid-cols-2 sm:grid-cols-1 ">
                                            <div className="w-[40%]  mx-auto">
                                                <img className="rounded-full" src="https://img.freepik.com/free-icon/boy_318-173523.jpg?t=st=1692266864~exp=1692267464~hmac=e88dc00cc137b2044c094c246e9555fcd169e2563318e4666c3b8857347e4047" alt="avatar" />
                                            </div>
                                            <div className="mt-6 flex flex-col items-center mx-12 lg:mx-0">
                                                <div className="relative text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                                    </svg>
                                                    <p className="px-6 py-1 text-lg italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                                    </svg>
                                                </div>
                                                <span className="w-12 h-1 my-2 rounded-lg bg-indigo-600"></span>
                                                <p>Leroy Jenkins</p>
                                            </div>

                                        </div>
                                    </section>
                                </SwiperSlide>

                            </Swiper>



                </div>
            </section>

        </>
    );
};

export default Testimonial;