import Footer from '../../components/footer'
import NavbarLogin from '../../components/navbar/navbarLogin'
import NotificationHire from './components/notificationhire'
import Head from 'next/head'

const NotificationLayout = ({ data }) => {
  return (
    <>
      <Head>
        <title>Notification</title>
      </Head>
      <NavbarLogin />
      <NotificationHire data={data} />
      <Footer />
    </>
  )
}
export default NotificationLayout
