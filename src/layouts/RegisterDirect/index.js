import React from "react";
import styles from "./RegisterDirect.module.scss";
import Link from "next/link";
import Head from 'next/head'

const RegisterDirectLayout = () => {
  return (
    <>
      <Head>
        <title>Direct</title>
      </Head>
      <div className={styles.regDirect}>
        <h1>Daftar Sebagai :</h1>
        <div className={styles.regBox}>
          <Link href="/direct/employee">
            <div className={styles.regDirectOption}>Pekerja</div>
          </Link>
          <Link href="/direct/recruiter">
            <div className={styles.regDirectOptionRec}>Perekrut</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterDirectLayout;
