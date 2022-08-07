import React from "react";
import styles from "./Employee.module.scss";
import Link from "next/link";

const EmployeeLayout = () => {
  return (
    <div className={`${styles.employeeLayout} row`}>
      <div className={`${styles.left} col-md-6`}>
        <div className={styles.logo}>
          <Link href="/#">
            <img src="/logo/logo.svg" alt="logo" />
          </Link>
          <Link href='/direct/recruiter'><button>Perekrut</button></Link>
        </div>
        <h1>Halo, Pewpeople</h1>
        <p>Lengkapi data diri anda</p>
        <form>
          <label>Nama</label>
          <br />
          <input type="text"  placeholder="Masukan nama lengkap" />
          <br />
          <label>Email</label>
          <br />
          <input type="text" name="email" placeholder="Masukan email" />
          <br />
          <label>No. Handphone</label>
          <br />
          <input type="text"  placeholder="Masukan no handphone" />
          <br />
          <label>Kata Sandi</label>
          <br />
          <input type="password"  placeholder="Masukan kata sandi" />
          <br />
          <label>Konfirmasi kata sandi</label>
          <br />
          <input type="password"  placeholder="Konfirmasi Kata sandi anda" />
          <br />
          <button>Daftar</button>
          <h5>Anda sudah punya akun?<Link href='/signin'> Masuk disini</Link></h5>
        </form>
      </div>
      <div className={`${styles.right} col-md-6`}>
        <div className={styles.title}>
          <p>Daftar sebagai perekrut disini</p>
          <Link href="/direct/recruiter">
            <button>Perekrut</button>
          </Link>
        </div>
        <div className={styles.rightBg}></div>
        <img src="/logo/register.svg" alt="logo" />
      </div>
    </div>
  );
};

export default EmployeeLayout;
