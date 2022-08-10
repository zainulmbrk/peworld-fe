import React from 'react'
import EmployeeProfileLayout from '../../layouts/EmployeeProfile'
import Cookies from 'js-cookie';

const Profile = (data) => {
	return (
		<>
			<EmployeeProfileLayout data={data} />
		</>
	);
};

export async function getServerSideProps() {
	let token = Cookies.get('token');
	let profile_id = Cookies.get('profile_id');
	console.log(token, profile_id);
	const res = await fetch(`http://localhost:5000/api/v1/profile?profile_id=4`, {
		method: 'GET',
	});
	//   console.log(context, 'kontek')
	const data = await res.json();
	return { props: { data } };
}
export default Profile