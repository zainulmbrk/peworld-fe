import styles from './Hiring.module.scss'
import { MdOutlineLocationOn, MdOutlineMail } from 'react-icons/md'
import { TbPhone } from 'react-icons/tb'
const Hiring = ({ data }) => {
  const results = data
  console.log(results, 'go')

  return (
    <>
      <div className={styles.wrapPage}>
        <div className="container">
          <div className="row">
            <div className={`${styles.leftCard} col-md-4`}>
              <div className={styles.detailsLayout}>
                <div className={styles.profileImage}>
                  <img src="/images/img6.png" alt="profile" />
                </div>
                <div className={styles.profileInfo}>
                  <h4>Louis Hamilton</h4>
                  <h3>Web Developer</h3>
                  <h5>Freelancer</h5>
                  <p>
                    <span>
                      <MdOutlineLocationOn className={styles.profileIcon} />
                    </span>
                    Purwokerto, Jawa Tengah
                  </p>
                  <p>
                    <span>
                      <TbPhone className={styles.profileIcon} />
                    </span>
                    0812 - 3456 - 789
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis
                    urna. Curabitur eu lacus fringilla, vestibulum risus at.
                  </p>
                </div>
                <div className={styles.profileSkills}>
                  <h2>Skills</h2>
                  <div className={styles.skillBox}>
                    <div className={styles.skillName}>Phyton</div>
                    <div className={styles.skillName}>Laravel</div>
                    <div className={styles.skillName}>Golang</div>
                    <div className={styles.skillName}>JavaScript</div>
                    <div className={styles.skillName}>PHP</div>
                    <div className={styles.skillName}>HTML</div>
                    <div className={styles.skillName}>C++</div>
                    <div className={styles.skillName}>Kotlin</div>
                    <div className={styles.skillName}>Swift</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.msg} col-md-8`}>
              <div className={styles.header}>
                <h5>Hubungi Lous Tomlinson</h5>
              </div>
              <div className={styles.subject}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod
                  <br /> ipsum et dui rhoncus auctor.
                </p>
              </div>
              <div className={styles.message}>
                <form>
                  <div className={styles.messageForm}>
                    <label>Tujuan tentang pesan ini</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Projek</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className={styles.messageForm}>
                    <label>Pesan</label>
                    <textarea
                      type="textarea"
                      placeholder="Deskripsikan/jelaskan lebih detail"
                    />
                  </div>
                </form>
              </div>
              <div className={styles.action}>
                <button>Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hiring
