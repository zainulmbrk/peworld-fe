import React from "react";
import styles from "./SkillTalent.module.scss";

const SkillTalent = () => {
  return (
    <div className="container">
      <div className={`${styles.skillTalent} row`}>
        <div className={`${styles.left} col-md-6`}>
            <h1>Skill Talent</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <div className={styles.detailsBox}>
                <div className={styles.details}>
                    <span><img src="/icons/checkyellow.svg" alt="check" /></span>
                    Java
                </div>
                <div className={styles.details}>
                    <span><img src="/icons/checkyellow.svg" alt="check" /></span>
                    Golang
                </div>
            </div>
            <div className={styles.detailsBox}>
                <div className={styles.details}>
                    <span><img src="/icons/checkyellow.svg" alt="check" /></span>
                    Kotlin
                </div>
                <div className={styles.details}>
                    <span className={styles.detailsRight}><img src="/icons/checkyellow.svg" alt="check" /></span>
                    C++
                </div>
            </div>
            <div className={styles.detailsBox}>
                <div className={styles.details}>
                    <span><img src="/icons/checkyellow.svg" alt="check" /></span>
                    PHP
                </div>
                <div className={styles.details}>
                    <span className={styles.detailsRight}><img src="/icons/checkyellow.svg" alt="check" /></span>
                    Ruby
                </div>
            </div>
            <div className={styles.detailsBox}>
                <div className={styles.details}>
                    <span><img src="/icons/checkyellow.svg" alt="check" /></span>
                    Javascript
                </div>
                <div className={styles.details}>
                    <span className={styles.detailsRight}><img src="/icons/checkyellow.svg" alt="check" /></span>
                    10+ Bahasa lainnya
                </div>
            </div>
        </div>
        <div className={`${styles.right} col-md-6`}>
          <img src="/images/img2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default SkillTalent;
