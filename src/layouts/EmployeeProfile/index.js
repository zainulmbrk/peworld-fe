import React, { useState } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/navbar";
import ProfileDetailsLayout from "./components/ProfileDetails";
import styles from "./Employee.module.scss";
import Head from 'next/head'

const EmployeeProfileLayout = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Navbar />
      <div className={styles.profileLayout}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProfileDetailsLayout />
            </div>
            <div className="col-md-8">
              <div className={styles.portofolio}>
                <div className={styles.portoTitle}>
                  <h3
                    className={toggle ? `${styles.active}` : ""}
                    onClick={() => setToggle(true)}
                  >
                    Portofolio
                  </h3>
                  <h3
                    className={toggle ? "" : `${styles.active}`}
                    onClick={() => setToggle(false)}
                  >
                    Pengalaman kerja
                  </h3>
                </div>
                {toggle ? (
                  <div className={styles.listPorto}>
                    <div className={styles.portoCard}>
                      <img src="/portofolio/porto6.png" alt="portofolio" />
                      <p>Reminder App</p>
                    </div>
                    <div className={styles.portoCard}>
                      <img src="/portofolio/porto1.png" alt="portofolio" />
                      <p>Social Media App</p>
                    </div>
                    <div className={styles.portoCard}>
                      <img src="/portofolio/porto2.png" alt="portofolio" />
                      <p>Project management web</p>
                    </div>
                    <div className={styles.portoCard}>
                      <img src="/portofolio/porto3.png" alt="portofolio" />
                      <p>Reminder App</p>
                    </div>
                    <div className={styles.portoCard}>
                      <img src="/portofolio/porto4.png" alt="portofolio" />
                      <p>Social Media App</p>
                    </div>
                    <div className={styles.portoCard}>
                      <img src="/portofolio/porto5.png" alt="portofolio" />
                      <p>Project management web</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className={styles.experience}>
                      <div className={styles.expDetails}>
                        <div className={styles.expImage}>
                          <img src="/images/img8.png" alt="experience" />
                        </div>
                        <div className={styles.expInfo}>
                          <h3>Engineer</h3>
                          <h4>Tokopedia</h4>
                          <h5>
                            July 2019 - January 2020 - <span>6 months</span>
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum erat orci, mollis nec gravida sed,
                            ornare quis urna. Curabitur eu lacus fringilla,
                            vestibulum risus at.
                          </p>
                        </div>
                      </div>
                      <div className={styles.expDetails}>
                        <div className={styles.expImage}>
                          <img src="/images/img8.png" alt="experience" />
                        </div>
                        <div className={styles.expInfo}>
                          <h3>Web Developer</h3>
                          <h4>Tokopedia</h4>
                          <h5>
                            July 2019 - January 2020 - <span>6 months</span>
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum erat orci, mollis nec gravida sed,
                            ornare quis urna. Curabitur eu lacus fringilla,
                            vestibulum risus at.
                          </p>
                        </div >
                      </div >
                    </div >
                  </>
                )}
              </div >
            </div >
          </div >
        </div >
      </div >
      <Footer />
    </>
  );
};

export default EmployeeProfileLayout;
