import Footer from '../../components/footer'
import NavbarLogin from '../../components/navbar/navbarLogin'
import NotificationHire from './components/notificationhire'

const NotificationLayout = ({ data }) => {
  return (
    <>
      <NavbarLogin />
      <NotificationHire data={data} />
      <Footer />
    </>
  )
}
export default NotificationLayout
