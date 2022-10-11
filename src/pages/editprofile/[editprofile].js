/** @format */

import EditEmployeeProfile from '../../layouts/edit-profile';

const EditProfiles = (data, dataskill) => {
	return (
		<>
			<EditEmployeeProfile data={data} dataskill={dataskill} />
		</>
	);
};

export async function getServerSideProps(context) {
	console.log(context.params.editprofile, 'ini context');
	const res = await fetch(
		`https://peworld-be.vercel.app/api/v1/profile?profile_id=${context.params.editprofile}`
	);
	const res2 = await fetch(
		`https://peworld-be.vercel.app/api/v1/skill?profile_id=${context.params.editprofile}`
	);
	const res3 = await fetch(
		`https://peworld-be.vercel.app/api/v1/portofolio?profile_id=${context.params.editprofile}`
	);
	const res4 = await fetch(
		`https://peworld-be.vercel.app/api/v1/experience/id?profile_id=${context.params.editprofile}`
	);
	const data = await res.json();
	const dataskill = await res2.json();
	const dataporto = await res3.json();
	const dataexperience = await res4.json();
	return { props: { data, dataskill, dataporto, dataexperience } };
}

export default EditProfiles;
