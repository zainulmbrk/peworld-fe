// import Details from "../../layouts/product/details"
import EmployeeProfileLayout from '../../layouts/EmployeeProfile'
import Cookies from 'js-cookie'
const ProfileDetails = ({ data }) => {
  // const {results} = data?.data
  // console.log(data, 'ini cuuy')
  return (
    <>
      <div className="content">
        {/* <Details data={data}/> */}
        <EmployeeProfileLayout data={data} />
      </div>
    </>
  )
}
export default ProfileDetails

export async function getServerSideProps(context) {
  let token = Cookies.get('token')
  const res = await fetch(
    `http://localhost:5000/api/v1/profile?profile_id=${context.params.id}`,
    {
      method: 'GET',
      // headers: {
      //   Authorization: `bearer ${token}`,
      // },
    }
  );
  //   console.log(context, 'kontek')
  const data = await res.json()
  return { props: { data } }
}
