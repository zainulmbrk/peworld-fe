import React, { useState } from "react";
import styles from "./NavbarLogin.module.scss";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineNotifications, MdOutlineEmail } from "react-icons/md";

const NavbarLogin = () => {
  const [toggle, setToggle] = useState(false);

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
              <Link href="/#">
                <div className={styles.navlink}>
                  <MdOutlineNotifications className={styles.icon} />
                </div>
              </Link>
              <Link href="/#">
                <div className={styles.navlink}>
                  <MdOutlineEmail className={styles.icon} />
                </div>
              </Link>
              <Link href="/#">
                <div className={styles.navlink}>
                  <div className={styles.profileImg}>
                    <picture>
                      <img src="/icons/profile.svg" alt="profile" />
                    </picture>
                  </div>
                </div>
              </Link>
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
