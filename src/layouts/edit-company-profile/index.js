import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import EditCompanyProfile from "./components/editProfile";

const CompanyProfiles = ({ data }) => {
    const [Refetch, setRefetch] = useState();
    const router = useRouter()
    if (data.isPekerja) {
        setRefetch(!Refetch)
        router.push('/')
    }
    return (<>
        <EditCompanyProfile />
    </>)
}
export default CompanyProfiles