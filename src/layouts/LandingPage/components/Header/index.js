import React from "react";
import styles from "./Header.module.scss";
import Link from 'next/link'

const Header = () => {
  return (
    <div className="container">
      <div className={`${styles.header} row`}>
        <div className={`${styles.left} col-md-6`}>
          <h1>Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <Link href='/#'><button>Mulai dari sekarang</button></Link>
        </div>
        <div className={`${styles.right} col-md-6`}>
          <img src="/images/img3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
