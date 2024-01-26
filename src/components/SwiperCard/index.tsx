import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { subtitle } from '../primitives';

interface SwiperCardProps {
    title: string;
    content: { image: string; title: string; description: string; }[];
}

const SwiperCard: React.FC<SwiperCardProps> = ({ title, content }) => {

    return (
        <div className="hidden flex-col gap-4 xl:gap-16 xl:flex h-29">
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
                    content.map((item, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <div className='mx-auto h-[85%] bg-center shadow-lg dark:bg-zinc-900' >
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
        </div >
    )
}

export default SwiperCard;