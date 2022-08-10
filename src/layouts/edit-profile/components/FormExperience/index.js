import React from "react";
import styles from './FormExp.module.scss'

const FormExperience = (data) => {
	const experience = data.data.data.data.dataexperience.data;
	return (
		<>
			<div className={styles.cardFormExperience}>
				<div className={styles.title}>
					<p>Pengalaman Kerja</p>
				</div>
				<div className={styles.horizontalLine}>
					<div className={styles.hline}></div>
				</div>
				{experience?.map((item, index) => {
					return (
						<>
							<div className='col-12 card border-dark p-2 mb-3'>
								<div className='col-12 d-flex'>
									<div className='text-danger'> Company = </div>
									{item.experience_company}
								</div>
								<div className='col-12 d-flex'>
									<div className='text-danger'> Posisi = </div>
									{item.experience_position}
								</div>
								<div className='col-12 d-flex'>
									<div className='text-danger'> From = </div>
									{item.experience_date_start}
								</div>
								<div className='col-12 d-flex'>
									<div className='text-danger'> Until = </div>
									{item.experience_date_end}
								</div>
								<div className='col-12 d-flex'>
									<div className='text-danger'> Description = </div>
									{item.experience_description}
								</div>
								<div className='col d-flex mt-3'>
									<button className='col-3 btn btn-outline-success me-4 '>
										Edit
									</button>
									<button className='col-3  btn btn-outline-danger '>
										Delete
									</button>
								</div>
							</div>
						</>
					);
				})}
				<form>
					<div className={styles.companyExperience}>
						<div className={styles.formCompany}>
							<label>Nama Perusahaan</label>
							<input type='text' placeholder='Nama Perusahaan' />
						</div>
						<div className={styles.formCompany}>
							<label>Posisi</label>
							<input type='text' placeholder='Posisi' />
						</div>
					</div>
					<div className={styles.date}>
						<div className={styles.formExperience}>
							<label>Tanggal Masuk</label>
							<input type='date' placeholder='DD-MM-YYYY'></input>
						</div>
						<div className={styles.formExperience}>
							<label>Tanggal Keluar</label>
							<input type='date' placeholder='DD-MM-YYYY'></input>
						</div>
					</div>
					<div className={styles.description}>
						<div className={styles.formExperience}>
							<label>Deskripsi singkat</label>
							<textarea
								type='textarea'
								placeholder='Deskripsikan pekerjaan anda'
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
