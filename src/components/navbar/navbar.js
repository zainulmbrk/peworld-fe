import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
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
              <h4>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </h4>
              <Link href="/signin">
                <div className={styles.navlink}>Masuk</div>
              </Link>
              <Link href="/direct">
                <div className={styles.navlink}>Daftar</div>
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

export default Navbar;
