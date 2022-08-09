import Homepage from '../../layouts/home'

const Home = () => {
  return (
    <>
      <Homepage />
    </>
  )
}
export default Home

// const Home = ({ data }) => {
//   return (
//     <>
//       <Homepage data={data} />
//     </>
//   )
// }
// export default Home

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:9511/api/v5/movies/`)
//   const data = await res.json()
//   return { props: { data } }
// }
