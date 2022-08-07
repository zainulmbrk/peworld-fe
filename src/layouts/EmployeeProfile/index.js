import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/navbar";
import ProfileDetailsLayout from "./components/ProfileDetails";
import styles from "./Employee.module.scss";

const EmployeeProfileLayout = () => {
  return (
    <>
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
                        <h3 className={styles.active}>Portofolio</h3>
                        <h3>Pengalaman kerja</h3>
                    </div>
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
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default EmployeeProfileLayout;
