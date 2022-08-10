import React from "react";
import styles from "./Header.module.scss";
import Link from 'next/link'
import { useRouter } from "next/router";
import Cookie from "js-cookie";

const Header = () => {
  const router = useRouter()
  const role = Cookie.get('profile_role')
  console.log(role)
  const rutePekerja = () => {
    router.push('/profile')
  }
  const rutePerekrut = () => {
    router.push('/home')
  }
  return (
    <div className="container">
      <div className={`${styles.header} row`}>
        <div className={`${styles.left} col-md-6`}>
          <h1>Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          {role == 'perekrut' ? (
            <button onClick={rutePerekrut}>Mulai Dari Sekarang</button>

          ) : (
            <button onClick={rutePekerja}>Mulai Dari Sekarang</button>

          )}
        </div>
        <div className={`${styles.right} col-md-6`}>
          <img src="/images/img3.png" alt="background" />
        </div>
      </div>
    </div>
  );
};

export default Header;
