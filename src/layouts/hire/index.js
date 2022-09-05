import Footer from "../../components/footer";
import Navbar from "../../components/navbar/navbar";
import NavbarLogin from "../../components/navbar/navbarLogin";
import Hiring from "./components/hiring";

const HiringPeople = ({ data }) => {
  return (
    <>
      {profile_id ? <NavbarLogin/> : <Navbar /> }
      <Hiring data={data} />
      <Footer />
    </>
  );
};

export default HiringPeople;
