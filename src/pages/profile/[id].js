// import Details from "../../layouts/product/details"
import EmployeeProfileLayout from '../../layouts/EmployeeProfile'
const ProfileDetails = ({ data }) => {
  // const {results} = data?.data
  console.log(data, 'ini cuuy')
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
  const res = await fetch(
    `http://localhost:5000/api/v1/profile?profile_id=${context.params.id}`,
    {
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlX2lkIjoyLCJwcm9maWxlX3JvbGUiOiJwZXJla3J1dCIsImlhdCI6MTY2MDA0MzQ2MiwiZXhwIjoxNjYwMTI5ODYyfQ.o7jb4482z6VRkpbX80EKAH4NYpV26yrUZXgLD-CdbJc',
      },
    },
  )
  //   console.log(context, 'kontek')
  const data = await res.json()
  return { props: { data } }
}
