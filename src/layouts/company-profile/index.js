import CompanyProfile from './components/companyProfile'
import NavbarLogin from '../../components/navbar/navbarLogin'
import Footer from '../../components/footer'
import Head from 'next/head'

const ProfileCompany = ({ data }) => {
  return (
    <>
      <Head>
        <title>Profile - Company</title>
      </Head>
      <NavbarLogin />
      <CompanyProfile data={data} />
      <Footer />
    </>
  )
}

export default ProfileCompany
