import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Hotels.css";
import data from '../../utils/slider.json'
import { sliderSettings } from "../../utils/common";
import PropertyCard from '../PropertyCard/PropertyCard';


const Hotels = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Hotels</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {
                    data.map((card, i)=>(
                            <SwiperSlide key={i}>
                                <PropertyCard card={card}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Hotels;

const SliderButtons = ()=> {
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-button">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};
