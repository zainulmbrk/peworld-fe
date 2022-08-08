import React from "react";
import styles from "./Forgotpass.module.scss";
import Link from "next/link";

const ForgotpassLayout = () => {
  return (
    <div className={`${styles.forgotpassLayout} row`}>
      <div className={`${styles.left} col-md-6`}>
        <div className={styles.title}>
          <h2>Forgot password</h2>
          <p>
            Enter your user account's verified email address and we will send
            you a password reset link.
          </p>
        </div>
        <div className={styles.leftBg}></div>
        <img src="/logo/log.svg" alt="" />
      </div>
      <div className={`${styles.right} col-md-6`}>
        <div className={styles.logo}>
          <Link href="/#">
            <img src="/logo/logo.svg" alt="logo" />
          </Link>
        </div>
        <h1>Forgot password</h1>
        <form>
          <label>Email</label>
          <br />
          <input type="text" name="email" placeholder="Enter your email" />
          <br />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotpassLayout;
