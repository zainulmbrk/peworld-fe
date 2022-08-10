/** @format */

import React from 'react';
import styles from './FormSkill.module.scss';
import { useState } from 'react';
import {
	DeleteSkill,
	EditSkill,
	AddSkill,
} from '../../../../redux/actions/skill';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
const FormSkill = (dataskill) => {
	const dispatch = useDispatch();
	const resultskill = dataskill.data.data.data.dataskill.data;
	const profile_id = Cookies.get('profile_id');
	const token = Cookies.get('token');
	const [Refetch, setRefetch] = useState();
	const [skillname, setskillname] = useState({
		skill_name: '',
		skill_id: 7,
	});
	const [addskill, setaddskill] = useState({
		skill_name: '',
	});
	const handledelete = (profile_id, skill_id, token, skill_name) => {
		if (window.confirm(`${skill_name} Akan Dihapus ?`)) {
			dispatch(DeleteSkill(profile_id, skill_id, token));
			window.location.reload();
		}
	};
	const handleEdit = (prevData) => {
		dispatch(
			EditSkill(profile_id, skillname.skill_id, token, skillname.skill_name)
		);
		window.location.reload();
	};
	const handleAdd = (prevData) => {
		dispatch(AddSkill(profile_id, addskill.skill_name, token));
		window.location.reload();
	};
	useEffect(() => {
		setskillname((prevState) => ({
			...prevState,
			skill_name: '',
		}));
	}, [Refetch]);
	return (
		<>
			<div className={styles.cardFormSkill}>
				<div className={styles.title}>
					<p>Skill</p>
				</div>

				<div className={styles.horizontalLine}>
					<div className={styles.hline}></div>
				</div>

				<div className={styles.companyForm}>
					<input
						type='text'
						placeholder='Masukan skill'
						onChange={(e) => {
							setaddskill((prevState) => ({
								...prevState,
								skill_name: e.target.value,
							}));
						}}
					/>
				</div>
				<div className='col d-flex flex-wrap justify-content-betweem '>
					{resultskill?.map((item, index) => {
						return (
							<>
								<a className=' btn btn-light me-1 mb-2 col-sm-12 col-md-5 d-flex '>
									<div className='col-12 d-flex'>
										<div className='col-6 pt-2'>{item.skill_name}</div>
										<div className='col-6 d-flex text-danger skill-edit'>
											<button
												className='btn btn-outline-success me-2 skill col-6'
												data-bs-toggle='modal'
												data-bs-target='#editSkill'
												onClick={(e) => {
													setskillname((prevState) => ({
														...prevState,
														skill_name: item.skill_name,
														skill_id: item.skill_id,
													}));
												}}
											>
												Edit
											</button>
											<button
												className='btn btn-outline-danger skill col-6'
												onClick={() => {
													handledelete(
														profile_id,
														item.skill_id,
														token,
														item.skill_name
													);
												}}
											>
												Delete
											</button>
										</div>
									</div>
								</a>
							</>
						);
					})}
				</div>
				<div className={styles.btnSaveSkill}>
					<button
						onClick={() => {
							handleAdd();
						}}
					>
						Simpan
					</button>
				</div>
			</div>
			<div
				className='modal fade'
				id='editSkill'
				tabIndex='-1'
				aria-labelledby='editSkillLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='editSkillLabel'>
								Edit Skill
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
										Change Skill
									</label>
									<input
										type='text'
										className='form-control'
										id='exampleInputEmail1'
										defaultValue={skillname.skill_name}
										// value={formEditData.title}

										onChange={(e) => {
											setskillname((prevState) => ({
												...prevState,
												skill_name: e.target.value,
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

export default FormSkill;
