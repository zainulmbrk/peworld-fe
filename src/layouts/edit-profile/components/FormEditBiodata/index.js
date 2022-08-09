import React from "react";
import styles from "./EditBiodata.module.scss";

const FormEditBiodata = () => {
  return (
    <>
      <div className={styles.formEditBiodata}>
        <div className={styles.cardFormBiodata}>
          <div className={styles.title}>
            <p>Data diri</p>
          </div>
          <div className={styles.horizontalLine}>
            <div className={styles.hline}></div>
          </div>
          <form>
            <div className={styles.companyForm}>
              <label>Nama Lengkap</label>
              <input type="text" placeholder="Masukan nama lengkap" />
            </div>
            <div className={styles.companyForm}>
              <label>Job desk</label>
              <input type="text" placeholder="Masukan job desk" />
            </div>
            <div className={styles.companyForm}>
                <label>Job Type</label>
                <select>
                    <option style={{ height: '50px' }}>Fulltime</option>
                    <option>Freelance</option>
                </select>
            </div>
            <div className={styles.companyForm}>
              <label>Domisili</label>
              <input type="text" placeholder="Masukan domisili" />
            </div>
            <div className={styles.companyForm}>
              <div className={styles.socialMedia}>
                <div className={styles.social}>
                  <label>Instagram</label>
                  <input type="text" placeholder="Username Instagram" />
                </div>
                <div className={styles.social}>
                  <label>Github</label>
                  <input type="text" placeholder="Username Github" />
                </div>
                <div className={styles.social}>
                  <label>Gitlab</label>
                  <input type="text" placeholder="Username Gitlab" />
                </div>
              </div>
            </div>
            <div className={styles.companyForm}>
              <label>Deskripsi singkat</label>
              <textarea
                type="textarea"
                placeholder="Tuliskan deskripsi singkat"
              />
            </div>
            <div className={styles.btnSaveBiodata}>
              <button>Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormEditBiodata;
