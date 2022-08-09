import React from "react";
import Link from "next/link";
import styles from "./Confirmpass.module.scss";
import Head from 'next/head'

const ConfirmpassLayout = () => {
  return (
    <>
      <Head>
        <title>Confirm Password - Peworld</title>
      </Head>
      <div className={`${styles.confirmpassLayout} row`}>
        <div className={`${styles.left} col-md-6`}>
          <div className={styles.leftBg}></div>
          <img src="/icons/confirmpass.svg" alt="" />
        </div>
        <div className={`${styles.right} col-md-6`}>
          <div className={styles.logo}>
            <Link href="/#">
              <img src="/logo/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className={styles.cpTitle}>
            <h1>Please login with your account</h1>
            <p>
              We have an an email containing a password reset instruction toyour
              email. please check your email.
            </p>
          </div>
          <form>
            <label>Email</label>
            <br />
            <input type="text" name="email" placeholder="Enter your email" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" placeholder="Enter your password" />
            <br />
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfirmpassLayout;
