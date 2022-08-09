import React from "react";
import styles from "./Resetpass.module.scss";
import Link from "next/link";
import Head from "next/head";

const ResetpassLayout = () => {
  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>
      <div className={`${styles.resetpassLayout} row`}>
        <div className={`${styles.left} col-md-6`}>
          <div className={styles.title}>
            <h2>Reset password</h2>
            <p>You need to change your password to activate your account</p>
          </div>
          <div className={styles.leftBg}></div>
          <img src="/icons/forgotpass.svg" alt="" />
        </div>
        <div className={`${styles.right} col-md-6`}>
          <div className={styles.logo}>
            <Link href="/#">
              <img src="/logo/logo.svg" alt="logo" />
            </Link>
          </div>
          <h1>Reset password</h1>
          <form>
            <label>Password</label>
            <br />
            <input type="password" placeholder="Enter your password" />
            <br />
            <label>Confirm Password</label>
            <br />
            <input type="password" placeholder="Confirm your password" />
            <br />
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetpassLayout;
