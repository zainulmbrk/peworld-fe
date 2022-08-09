import React from "react";
import SigninLayout from "../../layouts/signin";
import { getDataCookie } from "../../utils/authorization";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    }
  }
  return {
    props: { data: dataCookie },
  };
}
const Signin = () => {
  return (
    <>
      <SigninLayout />
    </>
  );
};

export default Signin;
