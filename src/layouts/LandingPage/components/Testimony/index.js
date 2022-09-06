import React from "react";
import styles from "./Testimony.module.scss";
import Slider from "react-slick";
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

const Testimony = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
            <TbChevronRight className="btn-icon"/> 
        </button>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <TbChevronLeft className="btn-icon"/>
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.testimony}>
      <h1>Their opinion about Peworld</h1>
      <div className={styles.testiBox}>
        <Slider {...settings}>
          <div className={styles.testiCard} data-aos="fade-right" data-aos-delay="400">
            <div className={styles.testiImg}>
              <img src="/images/img4.png" alt="person" />
            </div>
            <div className={styles.userDetails}>
              <h2>Harry Styles</h2>
              <h3>Web Developer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
            </div>
          </div>
          <div className={styles.testiCard} data-aos="fade-down" data-aos-delay="900">
            <div className={styles.testiImg}>
              <img src="/images/img5.png" alt="person" />
            </div>
            <div className={styles.userDetails}>
              <h2>Niall Horan</h2>
              <h3>Web Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className={styles.testiCard} data-aos="fade-left" data-aos-delay="600">
            <div className={styles.testiImg}>
              <img src="/images/img6.png" alt="person" />
            </div>
            <div className={styles.userDetails}>
              <h2>Louis Tomlinson</h2>
              <h3>Web Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
          <div className={styles.testiCard}>
            <div className={styles.testiImg}>
              <img src="/images/img6.png" alt="person" />
            </div>
            <div className={styles.userDetails}>
              <h2>Louis Tomlinson</h2>
              <h3>Web Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimony;
