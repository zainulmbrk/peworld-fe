/** @format */

import React, { useState } from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar/navbar';
import ProfileDetailsLayout from './components/ProfileDetails';
import styles from './Employee.module.scss';
import { useDispatch, useSelector } from 'react-redux/';
import { GetPortofolio } from '../../redux/actions/portofolio';
import { GetExperience } from '../../redux/actions/experience';
import { useEffect } from 'react';
import Image from 'next/image';
import NavbarLogin from '../../components/navbar/navbarLogin';
const EmployeeProfileLayout = ({ data }) => {
	console.log(data, 'ini data lo gaess');
	const dispatch = useDispatch();
	const dataportofolio = useSelector((state) => state.portofolio);
	const dataexperience = useSelector((state) => state.getexperience);
	console.log(dataexperience.data.data, 'AKSD');
	useEffect(() => {
		dispatch(GetPortofolio(data.data[0].profile_id));
		dispatch(GetExperience(data.data[0].profile_id));
	}, []);

	const results = data.data.data;
	const [toggle, setToggle] = useState(true);
	return (
		<>
			<NavbarLogin />
			<div className={styles.profileLayout}>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4'>
							<ProfileDetailsLayout data={data} />
						</div>
						<div className='col-md-8'>
							<div className={styles.portofolio}>
								<div className={styles.portoTitle}>
									<h3
										className={toggle ? `${styles.active}` : ''}
										onClick={() => setToggle(true)}
									>
										Portofolio
									</h3>
									<h3
										className={toggle ? '' : `${styles.active}`}
										onClick={() => setToggle(false)}
									>
										Pengalaman kerja
									</h3>
								</div>
								{toggle ? (
									<div className={styles.listPorto}>
										{dataportofolio?.data?.data?.map((item, index) => {
											return (
												<>
													<div className={styles.portoCard}>
														<Image
															className=''
															src={`http://localhost:5000/uploads/${item.portofolio_picture}`}
															width={'250'}
															height={'300'}
														/>
														<p>{item.portofolio_name}</p>
														<p>
															<a href={item.portofolio_repo}>
																{item.portofolio_repo}
															</a>
														</p>
													</div>
													;
												</>
											);
										})}
									</div>
								) : (
									<>
										<div className={styles.experience}>
											{dataexperience?.data?.data?.map((item, index) => {
												return (
													<>
														<div className={styles.expDetails}>
															<div className={styles.expImage}>
																<img src='/images/img8.png' alt='experience' />
															</div>
															<div className={styles.expInfo}>
																<h3>{item.experience_position}</h3>
																<h4>{item.experience_company}</h4>
																<h5>
																	<div className='text-danger'>
																		Masuk :
																		{item.experience_date_start.slice(0, 10)}{' '}
																	</div>
																	<div className='text-danger'>
																		Keluar :
																		{item.experience_date_end.slice(0, 10)}{' '}
																	</div>
																</h5>
																<p>{item.experience_description}</p>
															</div>
														</div>
														;
													</>
												);
											})}
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default EmployeeProfileLayout;
