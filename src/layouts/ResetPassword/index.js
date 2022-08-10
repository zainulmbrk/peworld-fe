import React, { useState } from "react";
import styles from "./Resetpass.module.scss";
import Link from "next/link";
import Head from "next/head";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "../../utils/axios";
import { useRouter } from "next/router";

const ResetpassLayout = () => {
  const router = useRouter()
  const [query, setQuery] = useState({ profile_email: '', profile_key: '' })
  const [formPassword, setFormPassword] = useState({ profile_password: '', profile_password_confirm: '' })
  console.log(formPassword)
  const handleClick = (e) => {
    e.preventDefault()
    const profile_email = Cookies.get('profile_email')
    const profile_key = Cookies.get('profile_key')
    axios.patch(`/auth/reset-pass/${profile_email}/${profile_key}`, formPassword)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          router.push('/signin')
        }
      }).catch((err) => {
        toast.error(err.response.message)
      })
  }
  const handleChangeText = (e) => {
    setFormPassword({ ...formPassword, [e.target.name]: e.target.value })
  }
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
            <input type="password" name="profile_password" placeholder="Enter your password" onChange={handleChangeText} />
            <br />
            <label>Confirm Password</label>
            <br />
            <input type="password" name="profile_password_confirm" placeholder="Confirm your password" onChange={handleChangeText} />
            <br />
            <button onClick={handleClick}>Send</button>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default ResetpassLayout;
