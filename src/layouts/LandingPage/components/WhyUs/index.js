import React from 'react'
import styles from './WhyUs.module.scss'

const WhyUs = () => {
  return (
    <div className="container">
        <div className={`${styles.whyUs} row`}>
            <div className={`${styles.left} col-md-6`}>
                <img src="images/img1.png" alt="logo" />
            </div>
            <div className={`${styles.right} col-md-6`}>
                <h1>Kenapa harus mencari talent di Peworld?</h1>
                <div className={styles.detailsBox}>
                    <div className={styles.details}>
                        <span><img src="/icons/check.svg" alt="check" /></span>
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className={styles.details}>
                        <span><img src="/icons/check.svg" alt="check" /></span>
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className={styles.details}>
                        <span><img src="/icons/check.svg" alt="check" /></span>
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className={styles.details}>
                        <span><img src="/icons/check.svg" alt="check" /></span>
                        Lorem ipsum dolor sit amet.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs