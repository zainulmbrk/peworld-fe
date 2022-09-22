import React, { useState } from 'react'
import styles from './Recruiter.module.scss'
import Link from 'next/link'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from "next/router"
import axios from "../../../utils/axios"
import Head from 'next/head'

const RecruiterLayout = () => {
  const router = useRouter()
  const [formRegister, setFormRegister] = useState({ profile_name: '', profile_email: '', profile_company: '', profile_sub_company: '', profile_phone_number: '', profile_password: '', profile_password_confirm: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/auth/register-perekrut`, formRegister)
      .then((res) => {
        router.push('/signin')
      }).catch((err) => {
        console.log(err, 'uuiu')
        toast.error(err.response.data.message)
      })
  }
  const handleChangeText = (e) => {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Head>
        <title>Daftar - Perekrut</title>
      </Head>
      <div className={`${styles.recruiterLayout} row`}>
        <div className={`${styles.left} col-md-6`}>
          <div className={styles.logo}>
            <Link href="/#">
              <img src="/logo/logo.svg" alt="logo" />
            </Link>
            <Link href='/direct/employee'><button>Pekerja</button></Link>
          </div>
          <h1>Halo, Pewpeople</h1>
          <p>Lengkapi data diri anda</p>
          <form>
            <label>Nama</label>
            <br />
            <input type="text" name='profile_name' placeholder="Masukan nama lengkap" onChange={handleChangeText} />
            <br />
            <label>Email</label>
            <br />
            <input type="text" name="profile_email" placeholder="Masukan email" onChange={handleChangeText} />
            <br />
            <label>Perusahaan</label>
            <br />
            <input type="text" name='profile_company' placeholder="Masukan nama perusahaan" onChange={handleChangeText} />
            <br />
            <label>Bidang perusahaan</label>
            <br />
            <input type="text" name='profile_sub_company' placeholder="Bidang perusahaan anda" onChange={handleChangeText} />
            <br />
            <label>No. Handphone</label>
            <br />
            <input type="text" name='profile_phone_number' placeholder="Masukan no handphone" onChange={handleChangeText} />
            <br />
            <label>Kata Sandi</label>
            <br />
            <input type="password" name='profile_password' placeholder="Masukan kata sandi" onChange={handleChangeText} />
            <br />
            <label>Konfirmasi kata sandi</label>
            <br />
            <input type="password" name='profile_password_confirm' placeholder="Konfirmasi kata sandi anda" onChange={handleChangeText} />
            <br />
            <button onClick={handleSubmit}>Daftar</button>
            <h5>Anda sudah punya akun?<Link href='/signin'> Masuk disini</Link></h5>
          </form>
        </div>
        <div className={`${styles.right} col-md-6`}>
          <div className={styles.title}>
            <p>Daftar sebagai pekerja disini</p>
            <Link href="/direct/employee">
              <button>Pekerja</button>
            </Link>
          </div>
          <div className={styles.rightBg}></div>
          <img src="/logo/recruiter.svg" alt="logo" />
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    </>
  )
}

export default RecruiterLayout