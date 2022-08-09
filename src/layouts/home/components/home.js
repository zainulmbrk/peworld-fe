import axios from 'axios'
import styles from './Home.module.scss'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useState, useEffect } from 'react'
// import { GetProfile } from '../../../redux/actions/home'
// import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Home = () => {
  //   const results = data?.data
  const router = useRouter()
  //   const [query, setQuery] = useState('')
  const [employee, setEmployee] = useState({
    page: 1,
    limit: 4,
    order_by: 'skill_name',
    sort: 'desc',
  })

  const [data, setData] = useState({
    results: {},
  })

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:5000/api/v1/profile/sort?page=${page}&limit=${limit}&order_by=${order_by}&sort=${sort}`,
    }).then((res) => {
      setData({ results: res.data.data })
    })
  }, [data])

  console.log(data, 'inibos')

  //   const [sort, setSort] = useState({
  //     order: '',
  //     sortby: '',
  //   })

  //   const [search, setSearch] = useState({
  //     limit: 4,
  //     skill_location: '',
  //   })
  //   const dispatch = useDispatch()
  //   const data = useSelector((state) => state.profile)

  //   useEffect(() => {
  //     const { skill_location } = search
  //     axios({
  //       method: 'GET',
  //       url: `http://localhost:5000/api/v1/profile/search${
  //         skill_location ? `?skill_location=${skill_location}` : ''
  //       }`,
  //     }).then((res) => {
  //       setSearch(res.data)
  //     })
  //   }, [search])
  //   useEffect(() => {
  //     dispatch(GetProfile())
  //   }, [sort])

  return (
    <>
      <div className={styles.headers}>
        <div className="container">
          <div className={styles.pageTitle}>
            <h4>Top Jobs</h4>
          </div>
        </div>
      </div>
      <div className={styles.contentFilter}>
        <div className="container">
          <div className={styles.filter}>
            <div className={styles.search}>
              <input
                type="search"
                placeholder="Search for any skill"
                onChange={(event) => setSearch(event.target.value)}
              ></input>
              <FiSearch className={styles.icon} />
            </div>
            <div className={styles.verticalLine}>
              <div className={styles.line}></div>
            </div>
            <div className={`${styles.Dropdown} dropdown`}>
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
              </button>
              <ul
                className={`${styles.dropMenu} dropdown-menu dropdown-menu-light mt-3`}
              >
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() =>
                      setSort((prevState) => ({
                        ...prevState,
                        sortby: 'title',
                      }))
                    }
                  >
                    Sortir berdasrkan Skill
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sortir berdasarkan Freelance
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sortir berdasarkan Fulltime
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.btnSearch}>
              <button className="btn">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentCard}>
        <div className="container">
          <div className={styles.wrap}>
            {data.results.map((item, index) => {
              return (
                <>
                  <div className={styles.cardUser} key={index}>
                    <div className={styles.image}>
                      <img
                        src={`http://localhost:5000/uploads/${item.profile_picture}`}
                      />
                    </div>
                    <div className={styles.info}>
                      <div className={styles.name}>
                        <p>{item.profile_name}</p>
                      </div>
                      <div className={styles.jobType}>
                        <p>Web developer - Fulltime</p>
                      </div>
                      <div className={styles.location}>
                        <span>
                          <HiOutlineLocationMarker className={styles.icon} />
                        </span>
                        {item.profile_location}
                      </div>
                      <div className={styles.skills}>
                        {setEmployee.split(',').map((skil) => {
                          return (
                            <>
                              <button>{skil.skill}</button>
                            </>
                          )
                        })}
                      </div>
                    </div>
                    <div className={styles.btnProfile}>
                      <Link href={`/profile`}>
                        <button>See Profile</button>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.horizontalLine}>
                    <div className={styles.hline}></div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.pagePagination}>
        <div className="container d-flex justify-content-center m-auto">
          <nav aria-label="Page navigation example">
            <ul className="pagination d-flex gap-2">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
export default Home
