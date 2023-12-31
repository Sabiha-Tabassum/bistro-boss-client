import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={'From 11 to 8 P.M'}
            heading={'Order Online'}>

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                 modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide> <img src={slide1} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={slide2} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={slide3} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={slide4} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={slide5} alt="" /> </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;