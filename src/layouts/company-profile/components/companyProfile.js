import styles from './CompanyProfile.module.scss'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import { BsInstagram } from 'react-icons/bs'
import { BsTelephone } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Cookies from 'js-cookie'
const CompanyProfile = ({ data }) => {
  const results = data.data
  let profile_id = Cookies.get('profile_id')
  return (
    <>
      <div className={styles.wrap}>
        <div className={'container'}>
          <div className={styles.headers}></div>
          {results.map((item) => {
            return (
              <>
                <div className={styles.content} key={item.profile_id}>
                  <div className={styles.picture}>
                    <picture>
                      <Image
                        className="rounded-circle"
                        src={`https://peworld-be.vercel.app/uploads/${item.profile_picture}`}
                        width={'100'}
                        height={'100'}
                      />
                    </picture>
                  </div>
                  <div className={styles.dataCompany}>
                    <div className={styles.companyName}>
                      <h5>{item.profile_company}</h5>
                    </div>
                    <div className={styles.companyType}>
                      <p>{item.profile_sub_company}</p>
                    </div>
                    <div className={styles.companyLocation}>
                      <span>
                        <HiOutlineLocationMarker className={styles.icon} />
                      </span>
                      {item.profile_location}
                    </div>
                  </div>
                  <div className={styles.descriptionCompany}>
                    <p>{item.profile_description}</p>
                  </div>
                  <div className={styles.btnEdit}>
                    <Link href={`/edit-company-profile/${profile_id}`}>
                      <button>Edit Profile</button>
                    </Link>
                  </div>
                  <div className={styles.contact}>
                    <div className={styles.social}>
                      <span>
                        <HiOutlineMail className={styles.icon} />
                      </span>
                      {item.profile_email}
                    </div>
                    <div className={styles.social}>
                      <span>
                        <BsInstagram className={styles.icon} />
                      </span>
                      {item.profile_instagram}
                    </div>
                    <div className={styles.social}>
                      <span>
                        <BsTelephone
                          className={`${styles.telephone} ${styles.icon}`}
                        />
                      </span>
                      {item.profile_phone_number}
                    </div>
                    <div className={styles.social}>
                      <span>
                        <FaLinkedinIn
                          className={`${styles.linkedin} ${styles.icon}`}
                        />
                      </span>
                      {item.profile_github}
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CompanyProfile
