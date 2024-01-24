import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { subtitle } from '../primitives';
import { motion } from 'framer-motion';
import { google } from '@/image-path';

interface SwiperCardProps {
    title: string;
    content: { image: string; title: string; description: string; }[];
}

const SwiperCard: React.FC<SwiperCardProps> = ({ title, content }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden flex-col gap-4 xl:gap-16 xl:flex h-29"
        >
            <h1 className={subtitle({ color: 'blue' })}>{title}</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper h-[22rem] max-w-[34rem]"
            >
                {
                    content.map((item) => {
                        return (
                            <SwiperSlide>
                                <div className='mx-auto h-[85%] bg-center shadow-lg' >
                                    <img className="mx-auto w-20 h-[9rem] pt-[4rem]" src={item.image} alt="" />
                                    <div className='flex flex-col'>
                                        <h2 className="text-center text-xl mt-4 font-bold px-10">
                                            {item.title}
                                        </h2>
                                        <p className=" text-lg p-4 leading-relaxed text-center ">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </motion.div >
    )
}

export default SwiperCard;