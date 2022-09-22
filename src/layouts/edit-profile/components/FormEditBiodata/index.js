import React from "react";
import styles from "./EditBiodata.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GetSingleProfile } from '../../../../redux/actions/UpdateProfile';
import Cookies from 'js-cookie'
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify'


const FormEditBiodata = (data) => {
	const resultdata = data.data.data.data.data.data[0];
	const dispatch = useDispatch();
	const [Refetch, setRefetch] = useState();
	const [ formEditData, setFormEditData ] = useState({})

	const formData = new FormData()
	formData.append('profile_name', formEditData.profile_name)
	formData.append('profile_job', formEditData.profile_job)
	formData.append('profile_job_type', formEditData.profile_job_type)
	formData.append('profile_location', formEditData.profile_location)
	formData.append('profile_github', formEditData.profile_github)
	formData.append('profile_gitlab', formEditData.profile_github)
	formData.append('profile_phone_number', formEditData.profile_github)
	formData.append('profile_birth_date', formEditData.profile_github)
	formData.append('profile_instagram', formEditData.profile_instagram)
	formData.append('profile_description', formEditData.profile_description)
	formData.append('profile_picture', formEditData.profile_picture)

	console.log(formData.profile_birth_date, 'ini birth date')

	const handleUpdateBiodata = async (e) => {
		e.preventDefault()
		const id = Cookies.get('profile_id')
		const token = Cookies.get('token')
		try {
		  const result = await axios({
			method: 'PATCH',
			data: formData,
			url: `http://localhost:5000/api/v1/profile/pekerja?profile_id=${id}`,
			headers: {
			  authorization: `Bearer ${token}`,
			},
		  })
		  if (result.data.success) {
			toast.success('Successfully Updated')
			setRefetch(!Refetch)
		  } else {
			toast.error('Failed, Try Again')
		  }
		} catch (err) {
		  // console.log(err)
		  toast.error(err.response.data.message)
		}
	  }

	  console.log(resultdata.profile_job_type, 'awekowakeoawkea')

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
					<div className={styles.companyForm}>
						<label>Nama Lengkap</label>
						<input
							type='text'
							placeholder='Masukan nama lengkap'
							defaultValue={resultdata.profile_name}
							onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_name: e.target.value }))}
						/>
					</div>
					<div className={styles.companyForm}>
						<label>Job Desc</label>
						<input
							type='text'
							placeholder='Masukan job desk'
							defaultValue={resultdata.profile_job}
							onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_job: e.target.value }))}
						/>
					</div>
					{/* <div className={styles.companyForm}>
						<label>Tanggal Lahir</label>
						<input
							type='date'
							defaultValue={resultdata.profile_birth_date}
							onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_birth_date: e.target.value }))}
						/>
					</div> */}
					<div className={styles.companyForm}>
						<label>Nomor Handphone <span style={{fontStyle: 'italic', fontSize: '12px'}}>(12 angka)</span></label>
						<input
							type='text'
							placeholder='Masukan nomor handphone'
							defaultValue={resultdata.profile_phone_number}
							onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_phone_number: e.target.value }))}
						/>
					</div>
					<div className={styles.companyForm}>
						<label>Job Type</label>
						<select onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_job_type: e.target.value }))}>
							<option style={{ height: '50px' }}>Freelance</option>
							<option>Fulltime</option>
						</select>
					</div>
					<div className={styles.companyForm}>
						<label>Domisili</label>
						<input
							type='text'
							placeholder='Masukan domisili'
							defaultValue={resultdata.profile_location}
							onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_location: e.target.value }))}
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
									onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_instagram: e.target.value }))}
								/>
							</div>
							<div className={styles.social}>
								<label>Github</label>
								<input
									type='text'
									placeholder='Username Github'
									defaultValue={resultdata.profile_github}
									onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_github: e.target.value }))}
								/>
							</div>
							<div className={styles.social}>
								<label>Gitlab</label>
								<input
									type='text'
									placeholder='Username Gitlab'
									defaultValue={resultdata.profile_gitlab}
									onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_gitlab: e.target.value }))}
								/>
							</div>
						</div>
					</div>
					<div className={styles.companyForm}>
						<label htmlFor="formFile" className="form-label">Upload profile picture</label>
  						<input className={`${styles.inputType} form-control`} type="file" id="formFile" onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_picture: e.target.files[0] }))}/>
					</div>
					<div className={styles.companyForm}>
						<label>Deskripsi singkat</label>
						<textarea
							type='textarea'
							placeholder='Tuliskan deskripsi singkat'
							defaultValue={resultdata.profile_description}
							onChange={(e) => setFormEditData(prevState => ({ ...prevState, profile_description: e.target.value }))}
						/>
					</div>
					<div className={styles.btnSaveBiodata}>
						<button onClick={handleUpdateBiodata}>Simpan</button>
					</div>
				</div>
			</div>
			<ToastContainer autoClose={2000} />
		</>
	);
}
export default FormEditBiodata;
