import CompanyProfile from "./components/companyProfile";
import NavbarLogin from '../../components/navbar/navbarLogin';
import Footer from '../../components/footer';

const ProfileCompany = () => {
	return (
		<>
			<NavbarLogin />
			<CompanyProfile />
			<Footer />
		</>
	);
};

export default ProfileCompany