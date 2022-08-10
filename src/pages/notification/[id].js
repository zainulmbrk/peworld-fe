import NotificationLayout from '../../layouts/notification'
import Cookies from 'js-cookie'
const Notification = ({ data }) => {
  return (
    <>
      <NotificationLayout data={data} />
    </>
  )
}
export default Notification

export async function getServerSideProps(context) {
  let token = Cookies.get('token')
  console.log(token, context, 'ghj')
  const res = await fetch(
    `http://localhost:5000/api/v1/notification/hire?profile_id=${context.params.id}`,
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
