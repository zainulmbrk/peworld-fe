import { useSelector } from "react-redux";
import EditCompanyProfile from "./components/editProfile";

const CompanyProfiles = () => {
    let { data } = useSelector((s) => s.company)

    return (<>
        <EditCompanyProfile data={data} />
    </>)
}
export default CompanyProfiles