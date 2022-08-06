import Homepage from "../../layouts/home"

const Home = ({data})=>{
    return(<>
        <Homepage data={data} />
    </>)
}
export default Home

export async function getServerSideProps(){
    const res = await fetch(`http://localhost:1102/api/v1/product/`)
    const data = await res.json()
  return { props: { data } }
}