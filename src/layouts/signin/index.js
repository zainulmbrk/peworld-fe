import React, { useState } from "react";
import styles from "./Signin.module.scss";
import Link from "next/link";
import { FaFacebookF, FaGoogle, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Cookie from "js-cookie";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import axios from "../../utils/axios";
import Head from "next/head";

const SigninLayout = () => {
  const router = useRouter()
  const [formLogin, setFormLogin] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/auth/login`, formLogin)
      .then((res) => {
        Cookie.set("token", res.data.data.token)
        Cookie.set("profile_id", res.data.data.profile_id)
        Cookie.set("profile_role", res.data.data.profile_role)
        Cookie.set("profile_email", res.data.data.profile_email)
        router.push('/')
      }).catch((err) => { 
        toast.error(err.response.data.message)
      })
  }
  const handleChangeText = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Head>
        <title>Masuk - Peworld</title>
      </Head>
      <div className={`${styles.signinLayout} row`}>
        <div className={`${styles.left} col-md-6`}>
          <div className={styles.title}>
            <h2>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h2>
            <p>
              Buat akun disini
            </p>
            <Link href="/direct">
              <button>Daftar</button>
            </Link>
          </div>
          <div className={styles.leftBg}></div>
          <picture>
            <img src="/logo/log.svg" alt="" />
          </picture>
        </div>
        <div className={`${styles.right} col-md-6`}>
          <div className={styles.logo}>
            <Link href='/#'><picture><img src="/logo/logo.svg" alt="logo" /></picture></Link>
            <Link href='/direct'><button>Daftar</button></Link>
          </div>
          <h1>Sign In</h1>
          <form>
            <label>Email</label>
            <br />
            <input type="text" name="profile_email" placeholder="Enter your email" onChange={handleChangeText} />
            <br />
            <label>Password</label>
            <br />
            <input type="password" name="profile_password" placeholder="Enter your password" onChange={handleChangeText} />
            <Link href="/forgotpassword">
              <p>Forgot your password?</p>
            </Link>
            <button onClick={handleSubmit}>Sign In</button>
            <div className={styles.loginWith}>
              <h3>Or login with : </h3>
              <div className={styles.socialBox}>
                <Link href="/#">
                  <div className={styles.social}>
                    <FaFacebookF className={styles.socialIcon} />
                  </div>
                </Link>
                <Link href="/#">
                  <div className={styles.social}>
                    <FaGoogle className={styles.socialIcon} />
                  </div>
                </Link>
                <Link href="/#">
                  <div className={styles.social}>
                    <FaTwitter className={styles.socialIcon} />
                  </div>
                </Link>
                <Link href="/#">
                  <div className={styles.social}>
                    <FaLinkedinIn className={styles.socialIcon} />
                  </div>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default SigninLayout;
