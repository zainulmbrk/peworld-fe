import styles from './EditProfile.module.scss'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const EditCompanyProfile = () => {
  return (
    <>
      <div className={styles.wrapPage}>
        <div className={styles.wrapHead}></div>
        <div className="container">
          <div className={styles.wrapCard}>
            <div className={styles.dataProfile}>
              <div className={styles.cardData}>
                <div className={styles.imgProfile}>
                  <img src="/assets/images/profile.png" />
                </div>
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
                <div className={styles.descriptionProfile}>
                  <p>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit. Vestibulum erat orci,
                    mollis
                    <br /> nec gravida sed, ornare quis urna. Curabitur
                    <br /> eu lacus fringilla, vestibulum risus at.
                  </p>
                </div>
              </div>
              <div className={styles.action}>
                <button className={styles.save}>Simpan</button>
                <button className={styles.back}>Kembali</button>
              </div>
            </div>
            <div className={styles.formEdit}>
              <div className={styles.cardForm}>
                <div className={styles.title}>
                  <p>Data diri</p>
                </div>
                <div className={styles.horizontalLine}>
                  <div className={styles.hline}></div>
                </div>
                <form>
                  <div className={styles.companyForm}>
                    <label>Nama Perusahaan</label>
                    <input type="text" placeholder="Masukan nama perusahaan" />
                  </div>
                  <div className={styles.companyForm}>
                    <label>Bidang</label>
                    <input
                      type="text"
                      placeholder="Masukan bidang perusahaan ex: Financial"
                    />
                  </div>
                  <div className={styles.companyForm}>
                    <label>Domisili</label>
                    <input type="text" placeholder="Masukan Domisili" />
                  </div>
                  <div className={styles.companyForm}>
                    <label>Deskripsi singkat</label>
                    <textarea
                      type="textarea"
                      placeholder="Tuliskan deskripsi angkat"
                    />
                  </div>
                  <div className={styles.companyForm}>
                    <label>Email</label>
                    <input type="text" placeholder="Masukan email" />
                  </div>
                  <div className={styles.companyForm}>
                    <label>Instagram</label>
                    <input type="text" placeholder="Masukan Username IG" />
                  </div>
                  <div className={styles.companyForm}>
                    <label>Nomor Telepon</label>
                    <input type="text" placeholder="Masukan nomor telepon" />
                  </div>
                  <div className={styles.companyForm}>
                    <label>Linkedin</label>
                    <input type="text" placeholder="Masukan nama Linkedin" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EditCompanyProfile
