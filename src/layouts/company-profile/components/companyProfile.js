import styles from './CompanyProfile.module.scss'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import { BsInstagram } from 'react-icons/bs'
import { BsTelephone } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
const CompanyProfile = ({ data }) => {
  const results = data.result
  console.log(results, 'inilo')
  return (
    <>
      <div className={styles.wrap}>
        <div className={'container'}>
          <div className={styles.headers}></div>
          <div className={styles.content}>
            <div className={styles.picture}>
              <picture>
                <img src="/assets/images/profile.png" alt="profile" />
              </picture>
            </div>
            <div className={styles.dataCompany}>
              <div className={styles.companyName}>
                <h5>PT. Martabat Jaya Abadi</h5>
              </div>
              <div className={styles.companyType}>
                <p>Financial</p>
              </div>
              <div className={styles.companyLocation}>
                <span>
                  <HiOutlineLocationMarker className={styles.icon} />
                </span>
                Purwokerto, Jawa Tengah
              </div>
            </div>
            <div className={styles.descriptionCompany}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec
                <br /> gravida sed, ornare quis urna. Curabitur eu lacus
                fringilla, vestibulum risus at.
              </p>
            </div>
            <div className={styles.btnEdit}>
              <button>Edit Profile</button>
            </div>
            <div className={styles.contact}>
              <div className={styles.social}>
                <span>
                  <HiOutlineMail className={styles.icon} />
                </span>
                zainulmbrk.id@gmail.com
              </div>
              <div className={styles.social}>
                <span>
                  <BsInstagram className={styles.icon} />
                </span>
                zainulmbrk11
              </div>
              <div className={styles.social}>
                <span>
                  <BsTelephone
                    className={`${styles.telephone} ${styles.icon}`}
                  />
                </span>
                0821-8190-1821
              </div>
              <div className={styles.social}>
                <span>
                  <FaLinkedinIn
                    className={`${styles.linkedin} ${styles.icon}`}
                  />
                </span>
                Muhammad Zainul Mubarok
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyProfile
