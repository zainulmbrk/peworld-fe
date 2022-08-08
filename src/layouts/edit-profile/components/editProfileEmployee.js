import ProfileDetailsLayout from '../../EmployeeProfile/components/ProfileDetails'
import styles from './EditProfileEmployee.module.scss'

const EditProfileEmployee = () => {
  return (
    <>
      <div className={styles.wrapPage}>
        <div className={styles.wrapHead}></div>
        <div className="container">
          <div className="row">
            <div className={`${styles.leftCard} col-md-4`}>
              <ProfileDetailsLayout />
            </div>
            <div className={`${styles.cardForm} col-md-8`}>
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
                      <label>Domisili</label>
                      <input type="text" placeholder="Masukan domisili" />
                    </div>
                    <div className={styles.companyForm}>
                      <div className={styles.socialMedia}>
                        <div className={styles.companyForm}>
                          <label>Instagram</label>
                          <input
                            type="text"
                            placeholder="Masukan Username IG"
                          />
                        </div>
                        <div className={styles.companyForm}>
                          <label>Github</label>
                          <input
                            type="text"
                            placeholder="Masukan Username Github"
                          />
                        </div>
                        <div className={styles.companyForm}>
                          <label>Gitlab</label>
                          <input
                            type="text"
                            placeholder="Masukan Username Gitlab"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.companyForm}>
                      <label>Deskripsi singkat</label>
                      <textarea
                        type="textarea"
                        placeholder="Tuliskan deskripsi angkat"
                      />
                    </div>
                    <div className={styles.btnSaveBiodata}>
                      <button>Simpan</button>
                    </div>
                  </form>
                </div>
              </div>
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
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-4"></div>
            <div className={`${styles.cardSkill} col-md-8`}>
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
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className={`${styles.cardExperience} col-md-8`}>
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
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className={`${styles.portofolio} col-md-8`}>
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
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
export default EditProfileEmployee
