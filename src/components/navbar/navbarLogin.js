import React, { useState } from "react";
import styles from "./navbarLogin.module.scss";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineNotifications, MdOutlineEmail } from "react-icons/md";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const NavbarLogin = () => {
  const router = useRouter();
  const profile_id = Cookies.get("profile_id");
  const [toggle, setToggle] = useState(false);
  const [panel, setPanel] = useState(false);

  const RouteProfile = () => {
    router.push(`/companyprofile`);
  };

  return (
    <>
      <nav className={styles.navbarLogin}>
        <div className="container">
          <div className={styles.logo}>
            <Link href="/">
              <div className={styles.imgbox}>
                <picture>
                  <img src="/logo/logo.svg" alt="logo" title="Peworld" />
                </picture>
              </div>
            </Link>
            <div
              className={
                toggle
                  ? `${styles.navmenu} ${styles.active}`
                  : `${styles.navmenu}`
              }
            >
              <div className={styles.navlink}>
                <MdOutlineNotifications
                  className={styles.icon}
                  onClick={() => setToggle(!toggle)}
                />
                <div
                  className={
                    toggle
                      ? `${styles.notifBox} ${styles.active}`
                      : `${styles.notifBox}`
                  }
                >
                  <h4>Notification</h4>
                  <div className={styles.notifContent}>
                    <div className={styles.notifImage}>
                      <img src="/icons/profile.svg" alt="profile" />
                    </div>
                    <div className={styles.notifText}>
                      <h4>Louis Hamilton</h4>
                      <h5>has sent you hire request</h5>
                      <p>a minute ago</p>
                    </div>
                  </div>
                  <div className={styles.vLine}></div>
                  <div className={styles.notifContent}>
                    <div className={styles.notifImage}>
                      <img src="/icons/profile.svg" alt="profile" />
                    </div>
                    <div className={styles.notifText}>
                      <h4>Louis Hamilton</h4>
                      <h5>has sent you hire request</h5>
                      <p>a minute ago</p>
                    </div>
                  </div>
                  <h2>SEE MORE</h2>
                </div>
              </div>
              <div className={styles.navlink}>
                <Link href="/chatroom">
                  <MdOutlineEmail className={styles.icon} />
                </Link>
                <span></span>
              </div>
              <div className={styles.navlink}>
                <div className={styles.profileImg}>
                  <img
                    src="/icons/profile.svg"
                    alt="profile"
                    onClick={() => setPanel(!panel)}
                  />
                  <div
                    className={
                      panel
                        ? `${styles.profilePanel} ${styles.active}`
                        : `${styles.profilePanel}`
                    }
                  >
                    <div className={styles.panelBox}>
                      <div className={styles.link} onClick={RouteProfile}>
                        Profile
                      </div>
                      <div className={styles.line}></div>
                      <Link href='/'>
                      <div
                        className={styles.link}
                      >
                        Logout
                      </div>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navIcon} onClick={() => setToggle(!toggle)}>
              {toggle ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLogin;
