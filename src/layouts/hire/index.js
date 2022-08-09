import Footer from "../../components/footer";
import Navbar from "../../components/navbar/navbar";
import Hiring from "./components/hiring";

const HiringPeople = ({ data }) => {
  return (
    <>
      <Navbar />
      <Hiring data={data} />
      <Footer />
    </>
  );
};

export default HiringPeople;
