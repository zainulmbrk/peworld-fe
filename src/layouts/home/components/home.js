import axios from 'axios'
import styles from './Home.module.scss'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import { GetProfile, GetSearchProfile } from '../../../redux/actions/home'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  let tampungskill = []
  let tampungsplit = []

  const data = useSelector((state) => state.profile)
  console.log(data?.results[0]?.skill, 'jsdh')
  for (let i = 0; i < data?.results?.length; i++) {
    tampungskill[i] = data.results[i].skill
    tampungsplit[i] = tampungskill[i].split(',')
  }
  const [sort, setSort] = useState({ limit: 20 });
	useEffect(() => {
		dispatch(GetProfile());
	}, [sort]);

	//search
	const [search, setSearch] = useState('');
	return (
		<>
			<div className={styles.headers}>
				<div className='container'>
					<div className={styles.pageTitle}>
						<h4>Top Jobs</h4>
					</div>
				</div>
			</div>
			<div className={styles.contentFilter}>
				<div className='container'>
					<div className={styles.filter}>
						<div className={styles.search}>
							<input
								type='search'
								placeholder='Search for any skill'
								onChange={(event) => setSearch(event.target.value)}
							/>
							<FiSearch className={styles.icon} />
						</div>
						<div className={styles.verticalLine}>
							<div className={styles.line}></div>
						</div>
						<div className={`${styles.Dropdown} dropdown`}>
							<button
								className='btn dropdown-toggle'
								type='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Sort
							</button>
							<ul
								className={`${styles.dropMenu} dropdown-menu dropdown-menu-light mt-3`}
							>
								<li>
									<a
										className='dropdown-item'
										onClick={() =>
											setSort((prevState) => ({
												...prevState,
												sortby: 'profile_location',
											}))
										}
									>
										Sortir berdasrkan Skill
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Sortir berdasarkan Freelance
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Sortir berdasarkan Fulltime
									</a>
								</li>
							</ul>
						</div>
						<div className={styles.btnSearch}>
							<button className='btn'>Search</button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.contentCard}>
				<div className='container'>
					<div className={styles.wrap}>
						{data?.results
							?.filter((item) => {
								if (search === '') {
									return data.results;
								} else if (
									item.skill.toLowerCase().includes(search.toLowerCase())
								) {
									return data.results;
								}
							})
							.map((item, index) => {
								console.log(item, 'ini item ke', index);
								return (
									<>
										<div className={styles.cardUser} key={index}>
											<div className={styles.image}>
												<Image
													className='rounded-circle '
													src={`http://localhost:5000/uploads/${item.profile_picture}`}
													width={'150'}
													height={'150'}
												/>
											</div>
											<div className={styles.info}>
												<div className={styles.name}>
													<h4>{item.profile_name}</h4>
													<h5>
														{item.profile_job} -{' '}
														<span>{item.profile_job_type}</span>
													</h5>
												</div>

												<div className={styles.location}>
													<span>
														<HiOutlineLocationMarker className={styles.icon} />
													</span>
													{item.profile_location}
												</div>
												<div className={`${styles.skills} flex-wrap`}>
													{tampungsplit[index]?.map((item2, index2) => {
														return (
															<>
																<button className='mb-3 '>{item2}</button>
															</>
														);
													})}
												</div>
											</div>
											<div className={styles.btnProfile}>
												<Link href={`/profile/${item.profile_id}`}>
													<button>See Profile</button>
												</Link>
											</div>
										</div>
										<div className={styles.horizontalLine}>
											<div className={styles.hline}></div>
										</div>
									</>
								);
							})}
					</div>
				</div>
			</div>
			<div className={styles.pagePagination}>
				<div className='container d-flex justify-content-center m-auto'>
					<nav aria-label='Page navigation example'>
						<ul className='pagination d-flex gap-2'>
							<li className='page-item'>
								<a className='page-link' href='#' aria-label='Previous'>
									<span aria-hidden='true'>&laquo;</span>
								</a>
							</li>
							<li className='page-item'>
								<a className='page-link' href='#'>
									1
								</a>
							</li>
							<li className='page-item'>
								<a className='page-link' href='#'>
									2
								</a>
							</li>
							<li className='page-item'>
								<a className='page-link' href='#'>
									3
								</a>
							</li>
							<li className='page-item'>
								<a className='page-link' href='#' aria-label='Next'>
									<span aria-hidden='true'>&raquo;</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}
export default Home
