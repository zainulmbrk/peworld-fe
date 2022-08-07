import React from "react";
import styles from "./ProfileDetails.module.scss";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { TbPhone } from "react-icons/tb";
import { FiGithub, FiGitlab } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'

const ProfileDetailsLayout = () => {
  return (
    <>
      <div className={styles.detailsLayout}>
        <div className={styles.profileImage}>
          <img src="/images/img6.png" alt="profile" />
        </div>
        <div className={styles.profileInfo}>
          <h4>Louis Hamilton</h4>
          <h3>Web Developer</h3>
          <h5>Freelancer</h5>
          <p><span><MdOutlineLocationOn className={styles.profileIcon}/></span>Purwokerto, Jawa Tengah</p>
          <p><span><TbPhone className={styles.profileIcon}/></span>0812 - 3456 - 789</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </p>
          <button>Hire</button>
        </div>
        <div className={styles.profileSkills}>
            <h2>Skills</h2>
            <div className={styles.skillBox}>
                <div className={styles.skillName}>Phyton</div>
                <div className={styles.skillName}>Laravel</div>
                <div className={styles.skillName}>Golang</div>
                <div className={styles.skillName}>JavaScript</div>
                <div className={styles.skillName}>PHP</div>
                <div className={styles.skillName}>HTML</div>
                <div className={styles.skillName}>C++</div>
                <div className={styles.skillName}>Kotlin</div>
                <div className={styles.skillName}>Swift</div>
            </div>
        </div>
        <div className={styles.profileSocial}>
            <p><span><MdOutlineMail className={styles.socialIcon}/></span>Louistommo@gmail.com</p>
            <p><span><BsInstagram className={styles.socialIcon}/></span>@Louist91</p>
            <p><span><FiGithub className={styles.socialIcon}/></span>@Louistommo</p>
            <p><span><FiGitlab className={styles.socialIcon}/></span>@Louistommo91</p>
        </div>
      </div>
    </>
  );
};

export default ProfileDetailsLayout;
