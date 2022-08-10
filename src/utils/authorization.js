import cookies from "next-cookies";

export function getDataCookie(context) {
  return new Promise((resolve) => {
    let dataCookie = cookies(context)
    if (dataCookie.token) {
      dataCookie.isLogin = true
    } else {
      dataCookie.isLogin = false
    }
    if (dataCookie.profile_role == 'perekrut') {
      dataCookie.isPerekrut = true
    } else {
      dataCookie.isPerekrut = false
    }
    if (dataCookie.profile_role == 'pekerja') {
      dataCookie.isPekerja = true
    } else {
      dataCookie.isPekerja = false
    }
    resolve(dataCookie)
  });
}