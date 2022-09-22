import Footer from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import EditProfileEmployee2 from './components/editProfileEmployee2';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import NavbarLogin from '../../components/navbar/navbarLogin';
import { useEffect } from 'react';
import Head from 'next/head'

const EditEmployeeProfile = (data, dataskill) => {
	const router = useRouter();
	const profile_id = Cookies.get('profile_id');
	const profile_role = Cookies.get('profile_id');

	console.log(profile_id, profile_role);
	const ruteLoginPekerja = () => {
		router.push(`/editprofile/${profile_id}`);
	};
	const ruteNotLogin = () => {
		router.push(`/signin`);
	};

	useEffect(() => {
		if (!profile_id) {
			router.push(`/signin`);
		}
	}, []);
	return (
		<>
			<Head>
				<title>Edit Profile - Employee</title>
			</Head>
			{profile_id ? (
				<>
					<NavbarLogin />
					<EditProfileEmployee2 data={data} dataskill={dataskill} />
					<Footer />
				</>
			) : (
				<>
					<>{ruteLoginPekerja}</>
				</>
			)}
		</>
	);
};

export default EditEmployeeProfile
