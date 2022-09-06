import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookie from 'js-cookie'

const Header = () => {
  const router = useRouter()
  const role = Cookie.get('profile_role')
  let profile_id = Cookie.get('profile_id')
  const rutePekerja = () => {
    router.push(`/profile/${profile_id}`)
  }
  const rutePerekrut = () => {
    router.push('/home')
  }
  const ruteNotLogin = () => {
    router.push('/signin')
  }
  return (
    <div className="container">
      <div className={`${styles.header} row`}>
        <div className={`${styles.left} col-md-6`}>
          <h1 data-aos="fade-right" data-aos-delay="300" data-aos-duration="700">Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
          <p data-aos="fade-right" data-aos-delay="400" data-aos-duration="700">
            Temukan developer berbakat dan terbaik di berbagai bidang keahlian
          </p>
          {role == 'perekrut' ? (
            <button onClick={rutePerekrut} data-aos="fade-right" data-aos-delay="600" data-aos-duration="700">Mulai Dari Sekarang</button>
          ) : (
            <>
              {role == 'pekerja' ? (
                <>
                  <button onClick={rutePekerja} data-aos="fade-right" data-aos-delay="600" data-aos-duration="700">Mulai Dari Sekarang</button>
                </>
              ) : (
                <>
                  <button onClick={ruteNotLogin} data-aos="fade-right" data-aos-delay="600" data-aos-duration="700">Mulai Dari Sekarang</button>
                </>
              )}
            </>
          )}
        </div>
        <div className={`${styles.right} col-md-6`} data-aos="fade-left" data-aos-delay="1000" data-aos-duration="700">
          <img src="/images/img3.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
