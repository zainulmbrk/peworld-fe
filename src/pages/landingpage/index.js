import React from 'react'
import LandingpageLayout from '../../layouts/LandingPage'

const Landingpage = () => {
	return (
		<>
			<LandingpageLayout />
		</>
	);
};

// export async function getServerSideProps() {
// 	let token = Cookies.get('token');
// 	let profile_id = Cookies.get('profile_id');

// 	const res = await fetch(
// 		`https://peworld-be.vercel.app/api/v1/profile?profile_id=${profile_id}`,
// 		{
// 			method: 'GET',
// 			headers: {
// 				Authorization: `bearer ${token}`,
// 			},
// 		}
// 	);
// 	//   console.log(context, 'kontek')
// 	const data = await res.json();
// 	return { props: { data } };
// }

export default Landingpage