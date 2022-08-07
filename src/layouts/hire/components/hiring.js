import styles from './Hiring.module.scss'
const Hiring = () => {
  return (
    <>
      <div className={styles.wrapPage}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={styles.card}>
                <h2>LAYOUT</h2>
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
