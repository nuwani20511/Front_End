import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Hotels.css'
import data from '../../utils/slider.json'


const Hotels = () => {
    return(
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flesColStart">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Hotels</span>
                </div>
                <Swiper>
                    {data.map((card, i)=>(
                            <SwiperSlide key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />

                                    <span className="secondaryText r-price">
                                        <span style={{ color: "orange" }}>$</span>
                                        <span>{card.price}</span>
                                    </span>

                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Hotels