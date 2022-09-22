import Footer from '../../components/footer'
import NavbarLogin from '../../components/navbar/navbarLogin'
import Hiring from './components/hiring'

const HiringPeople = ({ data }) => {
  
  return (
    <>
      <NavbarLogin/>
      <Hiring data={data} />
      <Footer />
    </>
  )
}

export default HiringPeople
