import styles from './Hiring.module.scss'
import { MdOutlineLocationOn, MdOutlineMail } from 'react-icons/md'
import { TbPhone } from 'react-icons/tb'
const Hiring = ({ data }) => {
  const results = data.data
  console.log(results, 'go')

  return (
    <>
      <div className={styles.wrapPage}>
        <div className="container">
          <div className="row">
            <div className={`${styles.leftCard} col-md-4`}>
              {results.map((item) => {
                return (
                  <>
                    <div className={styles.detailsLayout} key={item.profile_id}>
                      <div className={styles.profileImage}>
                        <img
                          src={`http://localhost:5000/uploads/${item.profile_picture}`}
                          alt="profile"
                        />
                      </div>
                      <div className={styles.profileInfo}>
                        <h4>{item.profile_name}</h4>
                        <h3>{item.profile_job}</h3>
                        <h5>{item.profile_job_type}</h5>
                        <p>
                          <span>
                            <MdOutlineLocationOn
                              className={styles.profileIcon}
                            />
                          </span>
                          {item.profile_location}
                        </p>
                        <p>
                          <span>
                            <TbPhone className={styles.profileIcon} />
                          </span>
                          {item.profile_phone_number}
                        </p>
                        <p>{item.profile_description}</p>
                      </div>
                      <div className={styles.profileSkills}>
                        <h2>Skills</h2>
                        <div className={styles.skillBox}>
                          <div className={styles.skillName}>{item.skill}</div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
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
