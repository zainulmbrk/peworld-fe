import Footer from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import Home from './components/home'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}
export default Homepage

// const Homepage = ({ data }) => {
//   return (
//     <>
//       <Navbar />
//       <Home data={data} />
//       <Footer />
//     </>
//   )
// }
// export default Homepage
