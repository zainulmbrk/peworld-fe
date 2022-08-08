import cookies from "next-cookies";
import { useRouter } from "next/router";

export function getDataCookie(context) {
  return new Promise((resolve) => {
    let dataCookie = cookies(context)
    const router = useRouter()
    console.log(dataCookie, 'opop')
    if (dataCookie.token) {
      dataCookie.isLogin = true
      if (dataCookie.profile_role == 'pekerja') {
        dataCookie.isPekerja = true
      }
    } else {
      dataCookie.isLogin = false
    }
    resolve(dataCookie)
  });
}
console.log(getDataCookie, 'ioio')