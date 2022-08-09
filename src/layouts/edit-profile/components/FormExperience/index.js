import React from "react";
import styles from './FormExp.module.scss'

const FormExperience = () => {
  return (
    <>
      <div className={styles.cardFormExperience}>
        <div className={styles.title}>
          <p>Pengalaman Kerja</p>
        </div>
        <div className={styles.horizontalLine}>
          <div className={styles.hline}></div>
        </div>
        <form>
          <div className={styles.companyExperience}>
            <div className={styles.formCompany}>
              <label>Nama Perusahaan</label>
              <input type="text" placeholder="Nama Perusahaan" />
            </div>
            <div className={styles.formCompany}>
              <label>Posisi</label>
              <input type="text" placeholder="Posisi" />
            </div>
          </div>
          <div className={styles.date}>
            <div className={styles.formExperience}>
              <label>Tanggal Masuk</label>
              <input type="date" placeholder="DD-MM-YYYY"></input>
            </div>
            <div className={styles.formExperience}>
              <label>Tanggal Keluar</label>
              <input type="date" placeholder="DD-MM-YYYY"></input>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.formExperience}>
              <label>Deskripsi singkat</label>
              <textarea
                type="textarea"
                placeholder="Deskripsikan pekerjaan anda"
              />
            </div>
          </div>
          <div className={styles.btnSaveExperience}>
            <button>Simpan</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormExperience;
