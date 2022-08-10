import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import GetStarted from './components/GetStarted'
import Header from './components/Header'
import SkillTalent from './components/SkillTalent'
import Testimony from './components/Testimony'
import WhyUs from './components/WhyUs'
import Head from 'next/head'
import NavbarLogin from '../../components/navbar/navbarLogin';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
const LandingpageLayout = () => {
	const router = useRouter();
	const profile_id = Cookies.get('profile_id');
	return (
		<>
			{profile_id ? (
				<>
					<Head>
						<title>Peworld</title>
					</Head>
					<NavbarLogin />
					<Header />
					<WhyUs />
					<SkillTalent />
					<Testimony />
					<GetStarted />
					<Footer />
				</>
			) : (
				<>
					<Head>
						<title>Peworld</title>
					</Head>
					<Navbar />
					<Header />
					<WhyUs />
					<SkillTalent />
					<Testimony />
					<GetStarted />
					<Footer />
				</>
			)}
		</>
	);
};

export default LandingpageLayout