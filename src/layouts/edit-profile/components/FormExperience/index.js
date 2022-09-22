import React from "react";
import styles from './FormExp.module.scss'
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import {
	DeleteExperience,
	EditExperience,
	AddExperience,
} from '../../../../redux/actions/experience';
import moment from "moment/moment";
import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri'
const FormExperience = (data) => {
	const dispatch = useDispatch();
	const profile_id = Cookies.get('profile_id');
	const experience = data.data.data.data.dataexperience.data;
	const handledelete = (profile_id, experience_id, experience_name) => {
		if (window.confirm(`${experience_name} Akan Dihapus ?`)) {
			dispatch(DeleteExperience(profile_id, experience_id));
			window.location.reload();
		}
	};
	const [idexperience, setidexperience] = useState({
		experience_id: 2,
	});
	const [dataexperience, setdataexperience] = useState({
		experience_company: '',
		experience_position: '',
		experience_date_start: '',
		experience_date_end: '',
		experience_description: '',
	});
	const [dataaddxperience, setdataaddexperience] = useState({
		experience_company: '',
		experience_position: '',
		experience_date_start: '',
		experience_date_end: '',
		experience_description: '',
	});
	const handleEdit = (prevData) => {
		dispatch(
			EditExperience(profile_id, idexperience.experience_id, dataexperience)
		);
		window.location.reload();
	};
	const handleAdd = (prevData) => {
		dispatch(
			AddExperience(
				profile_id,
				dataaddxperience.experience_company,
				dataaddxperience.experience_position,
				dataaddxperience.experience_date_start,
				dataaddxperience.experience_date_end,
				dataaddxperience.experience_description
			)
		),
			window.location.reload();
	};
	

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
							<div className={styles.expArea}>
								<div className={styles.expInfo}>
									<div className={styles.compName}>{item.experience_position}</div>
									<div className={styles.pos}>{item.experience_company}</div>
									<div className={styles.dateExp}>{moment(item.experience_date_start).format('MMM YYYY')} - {moment(item.experience_date_end).format('MMM YYYY')} • {moment(item.experience_date_start).startOf('day').fromNow(item.experience_date_end)}</div>
									<div className={styles.desc}>{item.experience_description}</div>
								</div>
								<div className={styles.expPanel}>
									<button className={styles.expEdit} data-bs-toggle='modal'
										data-bs-target='#editExperience'
										onClick={(e) => {
											setdataexperience((prevState) => ({
												...prevState,
												experience_company: item.experience_company,
												experience_position: item.experience_position,
												experience_date_start: item.experience_date_start,
												experience_date_end: item.experience_date_end,
												experience_description: item.experience_description,
											}));
											setidexperience((prevState) => ({
												...prevState,
												experience_id: item.experience_id,
											}));
										}}><RiEditLine className={styles.icon}/></button>
									<button className={styles.expDelete} onClick={() => {
											handledelete(
												profile_id,
												item.experience_id,
												item.experience_company
											),
												console.log(item, 'ini itemnya');
										}}><RiDeleteBin6Line className={styles.icon}/></button>
								</div>
							</div>
							<div className={styles.horizontal}></div>
						</>
					);
				})}
				<div>
					<div className={styles.companyExperience}>
						<div className={styles.formCompany}>
							<label>Nama Perusahaan</label>
							<input
								type='text'
								placeholder='Nama Perusahaan'
								onChange={(e) => {
									setdataaddexperience((prevState) => ({
										...prevState,
										experience_company: e.target.value,
									}));
								}}
							/>
						</div>
						<div className={styles.formCompany}>
							<label>Posisi</label>
							<input
								type='text'
								placeholder='Posisi'
								onChange={(e) => {
									setdataaddexperience((prevState) => ({
										...prevState,
										experience_position: e.target.value,
									}));
								}}
							/>
						</div>
					</div>
					<div className={styles.date}>
						<div className={styles.formExperience}>
							<label>Tanggal Masuk</label>
							<input
								type='date'
								placeholder='DD-MM-YYYY'
								onChange={(e) => {
									setdataaddexperience((prevState) => ({
										...prevState,
										experience_date_start: e.target.value,
									}));
								}}
							></input>
						</div>
						<div className={styles.formExperience}>
							<label>Tanggal Keluar</label>
							<input
								type='date'
								placeholder='DD-MM-YYYY'
								onChange={(e) => {
									setdataaddexperience((prevState) => ({
										...prevState,
										experience_date_end: e.target.value,
									}));
								}}
							></input>
						</div>
					</div>
					<div className={styles.description}>
						<div className={styles.formExperience}>
							<label>Deskripsi singkat</label>
							<textarea
								type='textarea'
								placeholder='Deskripsikan pekerjaan anda'
								onChange={(e) => {
									setdataaddexperience((prevState) => ({
										...prevState,
										experience_description: e.target.value,
									}));
								}}
							/>
						</div>
					</div>
					<div className={styles.btnSaveExperience}>
						<button
							onClick={() => {
								handleAdd();
							}}
						>
							Simpan
						</button>
					</div>
				</div>
			</div>
			<div
				className='modal fade'
				id='editExperience'
				tabIndex='-1'
				aria-labelledby='editexperienceLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='editexperienceLabel'>
								Edit experience
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<form onSubmit={(e) => handleEdit(e)}>
							<div className='modal-body'>
								<div className='mb-3'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Company
									</label>
									<input
										type='text'
										className='form-control'
										id='exampleInputEmail1'
										defaultValue={dataexperience.experience_company}
										// value={formEditData.title}

										onChange={(e) => {
											setdataexperience((prevState) => ({
												...prevState,
												experience_company: e.target.value,
											}));
										}}
									/>
								</div>
								<div className='mb-3'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Position
									</label>
									<input
										type='text'
										className='form-control'
										id='exampleInputEmail1'
										defaultValue={dataexperience.experience_position}
										// value={formEditData.title}

										onChange={(e) => {
											setdataexperience((prevState) => ({
												...prevState,
												experience_position: e.target.value,
											}));
										}}
									/>
								</div>
								<div className='mb-3'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Date In
									</label>
									<input
										type='text'
										className='form-control'
										id='exampleInputEmail1'
										defaultValue={dataexperience.experience_date_start.slice(
											0,
											10
										)}
										// value={formEditData.title}

										onChange={(e) => {
											setdataexperience((prevState) => ({
												...prevState,
												experience_company: e.target.value,
											}));
										}}
									/>
								</div>
								<div className='mb-3'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Date Out
									</label>
									<input
										type='text'
										className='form-control'
										id='exampleInputEmail1'
										defaultValue={dataexperience.experience_date_end.slice(
											0,
											10
										)}
										// value={formEditData.title}

										onChange={(e) => {
											setdataexperience((prevState) => ({
												...prevState,
												experience_company: e.target.value,
											}));
										}}
									/>
								</div>
								<div className='mb-3'>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Description
									</label>
									<input
										type='text'
										className='form-control'
										id='exampleInputEmail1'
										defaultValue={dataexperience.experience_description}
										// value={formEditData.title}

										onChange={(e) => {
											setdataexperience((prevState) => ({
												...prevState,
												experience_company: e.target.value,
											}));
										}}
									/>
								</div>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-bs-dismiss='modal'
								>
									Close
								</button>
								<button
									type='button'
									className='btn btn-primary'
									onClick={() => {
										handleEdit();
									}}
								>
									Save changes
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default FormExperience;
