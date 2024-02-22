import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../style/carousel.module.css'
import Carousel1 from "../assets/Carousel1.1.jpg";
import Carousel2 from "../assets/Carousel2.jpg";
import Carousel3 from "../assets/Carousel3.jpg";



function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 5000,
    pauseOnHover: false,

  }; 

  return (
    <Slider className={styles.contCarousel} {...settings}>
      <div>
        <img src={Carousel1}  />
      </div>
      <div>
        <img src={Carousel2}  />
      </div>
      <div>
        <img src={Carousel3} />
      </div>
    </Slider>
    )
}

export default Carousel