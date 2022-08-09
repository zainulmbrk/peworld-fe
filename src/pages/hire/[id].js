import Hiring from '../../layouts/hire/components/hiring'
import Cookies from 'js-cookie'
const ProfileHiring = ({ data }) => {
  return (
    <>
      <div className="content">
        <Hiring data={data} />
      </div>
    </>
  )
}
export default ProfileHiring

export async function getServerSideProps(context) {
  let token = Cookies.get('token')
  const res = await fetch(
    `http://localhost:5000/api/v1/profile?profile_id=${context.params.id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `bearer ${token}`,
      },
    },
  )
  const data = await res.json()
  return { props: { data } }
}
