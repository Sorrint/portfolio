import React from 'react';
import { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const imgPath = './img/';

const Examples = () => {
    const slides = [
        'hotel_admin_rooms',
        'hotel_booking_calendar',
        'hotel_booking_page',
        'hotel_calendar',
        'hotel_popup_booking',
        'hotel_popup_review',
        'hotel_profile_booking',
        'hotel_reviews_page',
        'hotel_room_card',
        'hotel_room_page'
    ];
    return (
        <div className="examples">
            <h1 className="examples__title">Бронирование номеров в отеле</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, EffectFade]}
                effect="fade"
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-container">
                            <img src={`${imgPath}${slide}.png`} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Examples;
