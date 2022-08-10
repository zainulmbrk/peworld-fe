/** @format */

import React from 'react';
import styles from './FormSkill.module.scss';
import { useState } from 'react';
import { DeleteSkill } from '../../../../redux/actions/skill';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

const FormSkill = (dataskill) => {
	const resultskill = dataskill.data.data.data.dataskill.data;
	const profile_id = Cookies.get('profile_id');
	const token = Cookies.get('token');
	const dispatch = useDispatch();
	const [skill, setskill] = useState({
		skill_id: 1,
		skill_name: 'S',
	});
	const handledelete = (profile_id, skill_id, token, skill_name) => {
		if (window.confirm(`${skill_name} Akan Dihapus ?`)) {
			dispatch(DeleteSkill(profile_id, skill_id, token));
		}
	};
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
						<input type='text' placeholder='Masukan skill' />
					</div>
					<div className='col d-flex flex-wrap justify-content-betweem '>
						{resultskill?.map((item) => {
							return (
								<>
									<a className=' btn btn-light me-1 mb-2 col-sm-12 col-md-5 d-flex '>
										<div className='col-12 d-flex'>
											<div className='col-6 pt-2'>{item.skill_name}</div>
											<div className='col-6 d-flex text-danger skill-edit'>
												<button className='btn btn-outline-success me-2 skill col-6'>
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
						<button>Simpan</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default FormSkill;
