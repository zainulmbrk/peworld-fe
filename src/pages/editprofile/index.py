import EditEmployeeProfile from '../../layouts/edit-profile'

const EditProfiles = (data, dataskill) => {
	return (
		<>
			<EditEmployeeProfile data={data} dataskill={dataskill} />
		</>
	);
};

export async function getServerSideProps() {
	const res = await fetch(`https://peworld-be.vercel.app/api/v1/profile?profile_id=4`);
	const res2 = await fetch(`https://peworld-be.vercel.app/api/v1/skill?profile_id=4`);
	const data = await res.json();
	const dataskill = await res2.json();
	return { props: { data, dataskill } };
}


export default EditProfiles
