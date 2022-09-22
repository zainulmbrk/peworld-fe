import Footer from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import Home from './components/home'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import NavbarLogin from '../../components/navbar/navbarLogin';
import Head from 'next/head'

const Homepage = () => {
	const router = useRouter();
	const profile_id = Cookies.get('profile_id');
	const profile_role = Cookies.get('profile_role');
	const RouteProfilePekerja = () => {
		router.push(`/profile/${profile_id}`);
	};
	const RouteNotLogin = () => {
		router.push(`/signin`);
	};
	console.log(profile_id, 'ini profile id nya');
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			{profile_id && profile_role == 'perekrut' ? (
				<>
					<NavbarLogin />
					<Home />
					<Footer />
				</>
			) : (
				<>
					{profile_id && profile_role == 'pekerja' ? (
						<>{RouteProfilePekerja}</>
					) : (
						<>{RouteNotLogin}</>
					)}
				</>
			)}
		</>
	);
};
export default Homepage

// const Homepage = ({ data }) => {
//   return (
//     <>
//       <Navbar />
//       <Home data={data} />
//       <Footer />
//     </>
//   )
// }
// export default Homepage
