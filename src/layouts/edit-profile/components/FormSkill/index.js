import React from "react";
import styles from './FormSkill.module.scss'

const FormSkill = () => {
  return (
    <>
      <div className={styles.cardFormSkill}>
        <div className={styles.title}>
          <p>Skill</p>
        </div>
        <div className={styles.horizontalLine}>
          <div className={styles.hline}></div>
        </div>
        <form>
          <div className={styles.companyForm}>
            <input type="text" placeholder="Masukan skill" />
          </div>
          <div className={styles.btnSaveSkill}>
            <button>Simpan</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSkill;
