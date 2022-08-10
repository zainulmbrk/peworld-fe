import React, { useEffect, useState } from "react";
import styles from "./Forgotpass.module.scss";
import Link from "next/link";
import Head from "next/head";
import axios from '../../utils/axios'
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ForgotpassLayout = () => {
  const [email, setEmail] = useState({ profile_email: '' })
  console.log(email.profile_email, 'opop')
  const handleClick = (e) => {
    e.preventDefault()
    const { profile_email } = email
    axios.get(`/auth/send-email-reset-pass/${profile_email}`)
      .then((res) => {
        console.log(res)
        Cookies.set('profile_key', res.data.data)
        Cookies.set('profile_email', email.profile_email)
        toast.success(res.data.message)
      }).catch((err) => {
        toast.error(err.response.message)
      })
  }
  const handleChangeText = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <div className={`${styles.forgotpassLayout} row`}>
        <div className={`${styles.left} col-md-6`}>
          <div className={styles.title}>
            <h2>Forgot password</h2>
            <p>
              Enter your user account&apos;s verified email address and we will send
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
            <input type="text" name="profile_email" placeholder="Enter your email" onChange={handleChangeText} />
            <br />
            <button onClick={handleClick}>Send</button>
          </form>
        </div>
        <div className={styles.leftBg}></div>
        <img src="/logo/log.svg" alt="" />
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default ForgotpassLayout;
