import Homepage from "../../layouts/home"

const Home = ({ data }) => {
	console.log(data, 'ini datanya we');
	return (
		<>
			<Homepage data={data} />
		</>
	);
};
export default Home;

export async function getServerSideProps() {
	// const dataauth = useSelector((indexreducer) => indexreducer.auth);
	const res = await fetch(
		`http://localhost:5000/api/v1/profile/sort?page=1&limit=4&order_by=skill_name&sort=desc`
	);
	const data = await res.json();
	return { props: { data } };
}