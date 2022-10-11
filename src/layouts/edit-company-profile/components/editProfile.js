import styles from './EditProfile.module.scss'
import { HiOutlineLocationMarker, HiPencil } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { GetCompany } from '../../../redux/actions/company'
import Cookies from 'js-cookie'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../../utils/axios'
import { useRouter } from 'next/router'
import { MdAdd } from 'react-icons/md'

const EditCompanyProfile = () => {
  const router = useRouter()
  let company = useSelector((s) => s.company)
  const dataCompany = company.data
  const dispatch = useDispatch()
  const [Refetch, setRefetch] = useState();

  useEffect(() => {
    dispatch(GetCompany())
  }, [dispatch])

  const [formAddData, setFormAddData] = useState({})
  const formData = new FormData()
  formData.append('profile_name', formAddData.profile_name)
  formData.append('profile_company', formAddData.profile_company)
  formData.append('profile_sub_company', formAddData.profile_sub_company)
  formData.append('profile_instagram', formAddData.profile_instagram)
  formData.append('profile_github', formAddData.profile_github)
  formData.append('profile_linkedin', formAddData.profile_linkedin)
  formData.append('profile_location', formAddData.profile_location)
  formData.append('profile_phone_number', formAddData.profile_phone_number)
  formData.append('profile_description', formAddData.profile_description)
  formData.append('profile_picture', formAddData.profile_picture)

  for (const value of formData.values()) {
    console.log(value)
  }
  const handleUpdateCompany = async (e) => {
    e.preventDefault()
    const id = Cookies.get('profile_id')
    const token = Cookies.get('token')
    try {
      const result = await axios({
        method: 'PATCH',
        data: formData,
        url: `/profile/perekrut?profile_id=${id}`,
        headers: {
          authorization: `Bearer ${token}`
        },
      })
      if (result.data.success) {
        toast.success('Successfully Updated')
        setRefetch(!Refetch)
      } else {
        toast.error('Failed, Try Again')
      }
    } catch (err) {
      // console.log(err)
      toast.error(err.response.data.message)
    }
  }
  const ruteBack = () => {
    router.back()
  }
  const inputFile = useRef(null);
  const onClickInput = () => {
    inputFile.current.click()
  }
  console.log(formAddData.profile_picture)
  return (
    <>
      <div className={styles.wrapPage}>
        <div className={styles.wrapHead}></div>
        {dataCompany.length > 0 ? dataCompany.map((company, index) => {
          return (
            <div className="container" key={index}>
              <div className={styles.wrapCard}>
                <div className={styles.dataProfile}>
                  <div className={styles.cardData} >
                    <div className={styles.imgProfile}>
                      <picture>
                        <img src={formAddData.profile_picture ? `${formAddData.profile_picture.name}` : `https://peworld-be.vercel.app/uploads/${company.profile_picture}`} alt='profile' className={styles.imgProfileWrapper} />
                      </picture>
                      <input type="file" onChange={(e) => setFormAddData(prevState => ({ ...prevState, profile_picture: e.target.files[0] }))} name="image" id="image" ref={inputFile} hidden />
                      <div className={styles.editImage} onClick={() => onClickInput()}>
                        <MdAdd className={styles.icon} />
                      </div>
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
                    <button className={styles.back} onClick={ruteBack}>Kembali</button>
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
                        <input type="text" placeholder="Masukan nama perusahaan" defaultValue={company.profile_company} onChange={(e) => {
                          setFormAddData(prevState => ({ ...prevState, profile_company: e.target.value }))
                        }} />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Bidang</label>
                        <input
                          type="text"
                          placeholder="Masukan bidang perusahaan ex: Financial" defaultValue={company.profile_sub_company} onChange={(e) => {
                            setFormAddData(prevState => ({ ...prevState, profile_sub_company: e.target.value }))
                          }}
                        />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Domisili</label>
                        <input type="text" placeholder="Masukan Domisili" defaultValue={company.profile_location} onChange={(e) => {
                          setFormAddData(prevState => ({ ...prevState, profile_location: e.target.value }))
                        }} />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Deskripsi singkat</label>
                        <textarea
                          type="textarea"
                          placeholder="Tuliskan deskripsi angkat" defaultValue={company.profile_description} onChange={(e) => {
                            setFormAddData(prevState => ({ ...prevState, profile_description: e.target.value }))
                          }}
                        />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Email</label>
                        <input type="text" placeholder="Masukan email" defaultValue={company.profile_email} onChange={(e) => {
                          setFormAddData(prevState => ({ ...prevState, profile_email: e.target.value }))
                        }} />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Instagram</label>
                        <input type="text" placeholder="Masukan Username IG" defaultValue={company.profile_instagram} onChange={(e) => {
                          setFormAddData(prevState => ({ ...prevState, profile_instagram: e.target.value }))
                        }} />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Nomor Telepon</label>
                        <input type="text" placeholder="Masukan nomor telepon" defaultValue={company.profile_phone_number} onChange={(e) => {
                          setFormAddData(prevState => ({ ...prevState, profile_phone_number: e.target.value }))
                        }} />
                      </div>
                      <div className={styles.companyForm}>
                        <label>Linkedin</label>
                        <input type="text" placeholder="Masukan nama Linkedin" defaultValue={company.profile_linkedin} onChange={(e) => {
                          setFormAddData(prevState => ({ ...prevState, profile_linkedin: e.target.value }))
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
