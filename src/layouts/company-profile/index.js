import CompanyProfile from './components/companyProfile'
import NavbarLogin from '../../components/navbar/navbarLogin'
import Footer from '../../components/footer'

const ProfileCompany = ({ data }) => {
  return (
    <>
      <NavbarLogin />
      <CompanyProfile data={data} />
      <Footer />
    </>
  )
}

export default ProfileCompany
