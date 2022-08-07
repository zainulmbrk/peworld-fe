import React from "react";
import styles from "./GetStarted.module.scss";

const GetStarted = () => {
  return (
    <div className="container">
      <div className={styles.getStarted}>
        <div className={styles.gsInfo}>
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
        <div className={styles.gsButton}>
            <button>Mulai Dari Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
