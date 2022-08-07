import React from "react";
import styles from "./Testimony.module.scss";
import Slider from "react-slick";

const Testimony = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
    ]
  };
  return (
    <div className={styles.testimony}>
      <h1>Their opinion about Peworld</h1>
      <div className={styles.testiBox}>
        <Slider {...settings}>
          <div className={styles.testiCard}>
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
          <div className={styles.testiCard}>
            <div className={styles.testiImg}>
              <img src="/images/img5.png" alt="person" />
            </div>
            <div className={styles.userDetails}>
              <h2>Niall Horan</h2>
              <h3>Web Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
