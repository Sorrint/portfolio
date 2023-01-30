import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { parse } from 'dom-parser-react';
import Profile from '../common/profile';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import About from '../common/about';

const imgPath = './img/';

const BookPage = forwardRef(function myFunction({ number, item }, ref) {
    console.log(item);
    const contents = item?.description
        ? parse(item?.description, {
              createElement: React.createElement,
              Fragment: React.Fragment
          })
        : '';
    return (
        <>
            <div className={`page${number + 1}`} ref={ref}>
                {number === 0 ? <Profile /> : ''}
                {item?.title && (
                    <div className="examples">
                        {item?.title && <h1 className="examples__title">{item.title}</h1>}
                        {item?.description && <div className="examples__description">{contents}</div>}
                        {item?.github && (
                            <a href={`${item?.github} `} className="deploy-link" target="_blank" rel="noreferrer">
                                Посмотреть репозиторий проекта
                            </a>
                        )}
                    </div>
                )}
            </div>
            <div className={`page${number + 2}`} ref={ref}>
                {number === 0 ? <About /> : ''}
                {item?.slides && (
                    <div className="examples">
                        <div className="examples__title_slides">Скриншоты</div>
                        {item?.slides && (
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, EffectFade]}
                                effect="fade"
                                centeredSlides={true}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                loop={true}
                            >
                                {item.slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="swiper-container">
                                            <img src={`${imgPath}${slide}.png`} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                        {item?.deploy && (
                            <a href={`${item?.deploy} `} className="deploy-link" target="_blank" rel="noreferrer">
                                Посмотреть деплой
                            </a>
                        )}
                    </div>
                )}
            </div>
        </>
    );
});

BookPage.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    number: PropTypes.number,
    item: PropTypes.object
};

export default BookPage;
