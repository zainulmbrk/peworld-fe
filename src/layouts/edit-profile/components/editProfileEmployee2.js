/** @format */

import ProfileDetailsLayout from '../../EmployeeProfile/components/ProfileDetails';
import styles from './EditProfileEmployee.module.scss';
import FormEditBiodata from './FormEditBiodata';
import FormExperience from './FormExperience';
import FormPortofolio from './FormPortofolio';
import FormSkill from './FormSkill';
import ProfileDetailsLayoutEdit from '../../EmployeeProfile/components/ProfileDetails/detaileditprofile';

const EditProfileEmployee2 = (data, dataskill) => {
	return (
		<>
			<div className={styles.wrapPage}>
				<div className={styles.wrapHead}></div>
				<div className='container'>
					<div className='row'>
						<div className={`${styles.leftCard} col-md-4`}>
							<ProfileDetailsLayoutEdit data={data} />
						</div>
						<div className={`${styles.cardForm} col-md-8`}>
							<FormEditBiodata data={data} />
							<FormSkill data={data} />
							<FormExperience data={data} />
							<FormPortofolio data={data} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default EditProfileEmployee2;
