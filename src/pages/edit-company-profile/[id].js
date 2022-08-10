import CompanyProfiles from "../../layouts/edit-company-profile";
import { getDataCookie } from "../../utils/authorization";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context)
  return {
    props: { data: dataCookie },
  };
}
const EditProfile = ({ data }) => {
  return (
    <>
      <CompanyProfiles data={data} />
    </>
  )
}
export default EditProfile
