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
                <div className="container mx-auto w-[70%]">
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
                                            <div className="mx-auto">
                                                <img className="w-[40%] mx-auto rounded-full" src="https://img.freepik.com/free-photo/man-wearing-waistcoat_1368-2886.jpg?w=740&t=st=1692352247~exp=1692352847~hmac=20a91675b23b3139c7a7ced6f67e9f57e90457a8d2a29e9dc8ce0aef117bbea2" alt="avatar" />
                                            </div>
                                            <div className="mt-6 flex flex-col items-center mx-12 lg:mx-0">
                                                <div className="relative text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                                    </svg>
                                                    <p className="px-6 py-1 text-lg italic">Incredible tool. Fast, accurate, versatile.  A game-changer for work and learning.</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                                    </svg>
                                                </div>
                                                <span className="w-12 h-1 my-2 rounded-lg bg-indigo-600"></span>
                                                <p>Jackson</p>
                                            </div>

                                        </div>
                                    </section>
                                </SwiperSlide>
                                {/* 2------------------------------------ */}
                                <SwiperSlide>
                                <section className="body-font ">
                                        <div className="w-[80%] mx-auto grid lg:grid-cols-2 sm:grid-cols-1 ">
                                            <div className="mx-auto">
                                                <img className="w-[40%] mx-auto  rounded-full" src="https://img.freepik.com/premium-photo/business-communication-modern-technology-office-concept-buisnessman-with-tablet-pc_380164-48013.jpg?w=740" alt="avatar" />
                                            </div>
                                            <div className="mt-6 flex flex-col items-center mx-12 lg:mx-0">
                                                <div className="relative text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                                    </svg>
                                                    <p className="px-6 py-1 text-lg italic">Life-changing experience! Enhanced my productivity and creativity. Truly remarkable AI technology.</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                                    </svg>
                                                </div>
                                                <span className="w-12 h-1 my-2 rounded-lg bg-indigo-600"></span>
                                                <p>Mason</p>
                                            </div>

                                        </div>
                                    </section>
                                </SwiperSlide>

                                {/* 3------------ */}

                                <SwiperSlide>
                                    <section className="body-font ">
                                        <div className="w-[80%] mx-auto grid lg:grid-cols-2 sm:grid-cols-1 ">
                                            <div className="mx-auto">
                                                <img className="w-[40%] mx-auto  rounded-full" src="https://img.freepik.com/premium-photo/full-growthin-portrait-confident-businessman_160672-30027.jpg?w=740" alt="avatar" />
                                            </div>
                                            <div className="mt-6 flex flex-col items-center mx-12 lg:mx-0">
                                                <div className="relative text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                                    </svg>
                                                    <p className="px-6 py-1 text-lg italic">Impressive assistance. Resolves queries instantly. Simplifies complex tasks. Highly recommended for everyone.</p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                                    </svg>
                                                </div>
                                                <span className="w-12 h-1 my-2 rounded-lg bg-indigo-600"></span>
                                                <p>Ethan</p>
                                            </div>

                                        </div>
                                    </section>
                                </SwiperSlide>

                                {/* 4--------- */}

                                <SwiperSlide>
                                    <section className="body-font ">
                                        <div className="w-[80%] mx-auto grid lg:grid-cols-2 sm:grid-cols-1 ">
                                            <div className="mx-auto">
                                                <img className="w-[40%] mx-auto rounded-full" src="https://img.freepik.com/free-photo/fashionable-man-winter-knitted-clothes_158595-4113.jpg?w=740&t=st=1692355941~exp=1692356541~hmac=5e91ccc9d9bd77e11b4981b023c58903749baa9cb7db187d8f28672a1500cb8c" alt="avatar" />
                                            </div>
                                            <div className="mt-6 flex flex-col items-center mx-12 lg:mx-0">
                                                <div className="relative text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                                    </svg>
                                                    <p className="px-6 py-1 text-lg italic">Unbelievably intuitive. Transforms ideas into reality.  A must-have for writers, creators, and thinkers.</p>
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