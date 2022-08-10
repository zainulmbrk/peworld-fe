import Footer from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import Home from './components/home'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
const Homepage = () => {
	const router = useRouter();
	// router.replace(`/User/homeuser`);
	const profile_id = Cookies.get('profile_id');
	console.log(profile_id, 'ini profile id nya');
	return (
		<>
			<Navbar />
			<Home />
			<Footer />
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
