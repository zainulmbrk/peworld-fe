import styles from './EditProfile.module.scss'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { GetCompany } from '../../../redux/actions/company'
import Cookies from 'js-cookie'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../../utils/axios'

const EditCompanyProfile = ({ data }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetCompany())
  }, [dispatch])

  const [formEditData, setFormEditData] = useState({})
  // formEditData 
  const handleUpdateCompany = async (e) => {
    e.preventDefault()
    const id = Cookies.get('profile_id')
    const token = Cookies.get('token')
    try {
      const result = await axios({
        method: 'PATCH',
        data: formEditData,
        url: `/profile/perekrut?profile_id=${id}`,
        headers: {
          authorization: `Bearer ${token}`
        },
      })
      if (result.data.success) {
        toast.success('Successfully Updated')
        setRefetch(!refetch)
      } else {
        toast.error('Failed, Try Again')
      }

    } catch (err) {
      console.log(err)
      // toast.error(err.response.data.message)
    }
  }

  console.log(formEditData)
  return (
    <>
      <div className={styles.wrapPage}>
        <div className={styles.wrapHead}></div>
        {data.length > 0 ? data.map((company, index) => {
          return (
            <div className="container" key={index}>
              <div className={styles.wrapCard}>
                <div className={styles.dataProfile}>

                  <div className={styles.cardData} >
                    <div className={styles.imgProfile}>
                      <picture>
                        <img src={`${company.profile_picture}`} alt='profile' />
                      </picture>
                    </div>
                    <div className={styles.companyName}>
                      <h5>{company.profile_company}</h5>
                    </div>
                    <div className={styles.companyType}>
                      <p>{company.profile_sub_company}</p>
                    </div>
                    <div className={styles.companyLocation}>
                      <span>
                        <HiOutlineLocationMarker className={styles.icon} />
                      </span>
                      {company.profile_location}
                    </div>
                    <div className={styles.descriptionProfile}>
                      <p>
                        {company.profile_description}
                      </p>
                    </div>
                  </div>

                  <div className={styles.action}>
                    <button className={styles.save} onClick={(e) => handleUpdateCompany(e)}>Simpan</button>
                    <button className={styles.back}>Kembali</button>
                  </div>
                </div>
                <div className={styles.formEdit}>
                  <div className={styles.cardForm}>
                    <div className={styles.title}>
                      <p>Data diri</p>
                    </div>
                    <div className={styles.horizontalLine}>
                      <div className={styles.hline}></div>
                    </div>
                    <form onSubmit={(e) => handleUpdateCompany(e)}>
                      <div className={styles.companyForm}>
                        <label>Nama Perusahaan</label>
                        <input type="text" placeholder="Masukan nama perusahaan" value={formEditData.profile_company} onChange={(e) => {
                          setFormEditData(prevState => ({ ...prevState, profile_company: e.target.value }))
                        }} />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Bidang</label>
                        <input
                          type="text"
                          placeholder="Masukan bidang perusahaan ex: Financial" value={formEditData.profile_sub_company} onChange={(e) => {
                            setFormEditData(prevState => ({ ...prevState, profile_sub_company: e.target.value }))
                          }}
                        />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Domisili</label>
                        <input type="text" placeholder="Masukan Domisili" value={formEditData.profile_location} onChange={(e) => {
                          setFormEditData(prevState => ({ ...prevState, profile_location: e.target.value }))
                        }} />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Deskripsi singkat</label>
                        <textarea
                          type="textarea"
                          placeholder="Tuliskan deskripsi angkat" value={formEditData.profile_description} onChange={(e) => {
                            setFormEditData(prevState => ({ ...prevState, profile_description: e.target.value }))
                          }}
                        />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Email</label>
                        <input type="text" placeholder="Masukan email" value={formEditData.profile_email} onChange={(e) => {
                          setFormEditData(prevState => ({ ...prevState, profile_email: e.target.value }))
                        }} />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Instagram</label>
                        <input type="text" placeholder="Masukan Username IG" value={formEditData.profile_instagram} onChange={(e) => {
                          setFormEditData(prevState => ({ ...prevState, profile_instagram: e.target.value }))
                        }} />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Nomor Telepon</label>
                        <input type="text" placeholder="Masukan nomor telepon" value={formEditData.profile_phone_number} onChange={(e) => {
                          setFormEditData(prevState => ({ ...prevState, profile_phone_number: e.target.value }))
                        }} />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Linkedin</label>
                        <input type="text" placeholder="Masukan nama Linkedin" value={formEditData.profile_linkedin} onChange={(e) => {
                          setFormEditData(prevState => ({ ...prevState, profile_linkedin: e.target.value }))
                        }} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )
        }) : null
        }
      </div>
      <ToastContainer autoClose={2000} />
    </>
  )
}
export default EditCompanyProfile
