import Footer from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import EditProfileEmployee from './components/editProfileEmployee'

const EditEmployeeProfile = (data, dataskill) => {
	return (
		<>
			<Navbar />
			<EditProfileEmployee data={data} dataskill={dataskill} />
			<Footer />
		</>
	);
};

export default EditEmployeeProfile
