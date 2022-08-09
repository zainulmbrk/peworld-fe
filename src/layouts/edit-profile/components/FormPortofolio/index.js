import React from "react";
import styles from "./FormPorto.module.scss";

const FormPortofolio = () => {
  return (
    <>
      <div className={styles.cardPortofolioForm}>
        <div className={styles.title}>
          <p>Portofolio</p>
        </div>
        <div className={styles.horizontalLine}>
          <div className={styles.hline}></div>
        </div>
        <form>
          <div className={styles.portofolioForm}>
            <label>Nama Aplikasi</label>
            <input type="text" placeholder="Masukan nama aplikasi" />
          </div>
          <div className={styles.portofolioForm}>
            <label>Link Repository</label>
            <input type="text" placeholder="Masukan link repository" />
          </div>
          <div className={styles.portofolioFormImg}>
            <label>Upload gambar</label>
            <input
              type="file"
              id="file"
              className="file-upload"
              data-height="500"
            />
          </div>
          <div className={styles.btnSavePortofolio}>
            <button>Tambah Portofolio</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormPortofolio;
