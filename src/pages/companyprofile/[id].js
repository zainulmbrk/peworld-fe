import ProfileCompany from '../../layouts/company-profile'
import NavbarLogin from '../../components/navbar/navbarLogin'
import Footer from '../../components/footer'
import Cookies from 'js-cookie'
const Company = ({ data }) => {
  return (
    <>
      <ProfileCompany data={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  let token = Cookies.get('token')
  const res = await fetch(
    `http://localhost:5000/api/v1/profile?profile_id=${context.params.id}`,
    {
      method: 'GET',
      // headers: {
      //   authorization: `Bearer ${token}`,
      // },
    },
  )
  const data = await res.json()
  return { props: { data } }
}

export default Company
