import React from 'react'
import styles from './ProfileDetails.module.scss'
import { MdOutlineLocationOn, MdOutlineMail } from 'react-icons/md'
import { TbPhone } from 'react-icons/tb'
import { FiGithub, FiGitlab } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link'
import Cookies from 'js-cookie';
import Image from 'next/image';

const ProfileDetailsLayout = ({ data }) => {
	const profile_id = Cookies.get('profile_id');
	const role = Cookies.get('profile_role');
	const skillsplit = data.data[0].skill.split(',');
	const results = data.data;
	return (
		<>
			<div className={styles.detailsLayout}>
				{results.map((item) => {
					return (
						<>
							<div className={styles.profileImage} key={item.profile_id}>
								<img
									className='rounded-circle'
									src={`http://localhost:5000/uploads/${item.profile_picture}`}
									width={'150'}
									height={'150'}
								/>
							</div>
							<div className={styles.profileInfo}>
								<h4>{item.profile_name}</h4>
								<h3>{item.profile_job}</h3>
								<h5>{item.profile_job_type}</h5>
								<p>
									<span>
										<MdOutlineLocationOn className={styles.profileIcon} />
									</span>
									{item.profile_location}
								</p>
								<p>
									<span>
										<TbPhone className={styles.profileIcon} />
									</span>
									{item.profile_phone_number}
								</p>
								<p>
									{item.profile_description}
								</p>
								{role == 'pekerja' ? (
									<>
										<Link href={`/editprofile/${profile_id}`}>
											<button>Edit Profile</button>
										</Link>
									</>
								) : (
									<>
										<Link href={`/hire/${item.profile_id}`}>
											<button>Hire</button>
										</Link>
									</>
								)}
							</div>
							<div className={`${styles.profileSkills} d-flex  flex-wrap`}>
								<div className='col-12'>
									<h2>Skills</h2>
								</div>
								{skillsplit?.map((item, index) => {
									return (
										<>
											<div className={`${styles.skillBox} me-2`}>
												<div className={styles.skillName}>{item}</div>
											</div>
										</>
									);
								})}
							</div>
							<div className={styles.profileSocial}>
								<p>
									<span>
										<MdOutlineMail className={styles.socialIcon} />
									</span>
									{item.profile_email}
								</p>
								<p>
									<span>
										<BsInstagram className={styles.socialIcon} />
									</span>
									{item.profile_instagram}
								</p>
								<p>
									<span>
										<FiGithub className={styles.socialIcon} />
									</span>
									{item.profile_github}
								</p>
								<p>
									<span>
										<FiGitlab className={styles.socialIcon} />
									</span>
									{item.profile_gitlab}
								</p>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default ProfileDetailsLayout
