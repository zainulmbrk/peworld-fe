import React from 'react'
import ResetpassLayout from '../../layouts/ResetPassword'

const Resetpassword = ({ code }) => {
  return (
    <>
      <ResetpassLayout code={code} />
    </>
  )
}
export async function getServerSideProps(context) {
  const { code } = context.params
  return {
    props: {
      code
    }
  }
}

export default Resetpassword