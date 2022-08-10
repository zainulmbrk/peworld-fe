import React from "react";
import styles from "./EditBiodata.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GetSingleProfile } from '../../../../redux/actions/UpdateProfile';
const FormEditBiodata = (data) => {
	const resultdata = data.data.data.data.data.data[0];
	const dispatch = useDispatch();
	const [Refetch, setRefetch] = useState();
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
							<input
								type='text'
								placeholder='Masukan nama lengkap'
								defaultValue={resultdata.profile_name}
							/>
						</div>
						<div className={styles.companyForm}>
							<label>Job desk</label>
							<input
								type='text'
								placeholder='Masukan job desk'
								defaultValue={resultdata.profile_job}
							/>
						</div>
						<div className={styles.companyForm}>
							<label>Job Type</label>
							{resultdata.profile_job_type == 'freelance' ? (
								<>
									<select>
										<option style={{ height: '50px' }}>Freelance</option>
										<option>Fulltime</option>
									</select>
								</>
							) : (
								<>
									<select>
										<option style={{ height: '50px' }}>Fulltime</option>
										<option>Freelance</option>
									</select>
								</>
							)}
						</div>
						<div className={styles.companyForm}>
							<label>Domisili</label>
							<input
								type='text'
								placeholder='Masukan domisili'
								defaultValue={resultdata.profile_location}
							/>
						</div>
						<div className={styles.companyForm}>
							<div className={styles.socialMedia}>
								<div className={styles.social}>
									<label>Instagram</label>
									<input
										type='text'
										placeholder='Username Instagram'
										defaultValue={resultdata.profile_instagram}
									/>
								</div>
								<div className={styles.social}>
									<label>Github</label>
									<input
										type='text'
										placeholder='Username Github'
										defaultValue={resultdata.profile_github}
									/>
								</div>
								<div className={styles.social}>
									<label>Gitlab</label>
									<input
										type='text'
										placeholder='Username Gitlab'
										defaultValue={resultdata.profile_gitlab}
									/>
								</div>
							</div>
						</div>
						<div className={styles.companyForm}>
							<label>Deskripsi singkat</label>
							<textarea
								type='textarea'
								placeholder='Tuliskan deskripsi singkat'
								defaultValue={resultdata.profile_description}
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
}
export default FormEditBiodata;
