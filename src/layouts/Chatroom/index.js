import React, { useState } from "react";
import Head from "next/head";
import styles from "./Chatroom.module.scss";
import Footer from "../../components/footer";
import { RiSendPlaneFill } from "react-icons/ri";
import Navbar from "../../components/navbar/navbar";
import { BsCheckAll } from "react-icons/bs";
import NavbarLogin from "../../components/navbar/navbarLogin";
import Cookies from 'js-cookie';

const ChatroomLayout = () => {
  const [toggle, setToggle] = useState(false);
  const profile_id = Cookies.get('profile_id');

  return (
    <>
      <Head>
        <title>Chatroom</title>
      </Head>
      {profile_id ? <NavbarLogin /> : <Navbar />}
      <div className={styles.chatroom}>
        <div className="container">
          <div className="row">
            <div className={`${styles.left} col-md-4`}>
              <div className={styles.leftBox}>
                <div className={styles.chatBox}>
                  <h1>Chat</h1>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.user} onClick={() => setToggle(!toggle)}>
                  <div className={styles.userImage}>
                    <img src="/icons/user.svg" alt="user" />
                  </div>
                  <div className={styles.userContent}>
                    <h4>Jonas Adam</h4>
                    <p>Permisi kak, mau tanya...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.right} col-md-8`}>
              <div
                className={
                  toggle
                    ? `${styles.rightBox} ${styles.active}`
                    : `${styles.rightBox}`
                }
              >
                <div className={styles.chatRoom}>
                  <div className={styles.userInfo}>
                    <img src="/icons/user.svg" alt="user" />
                    <h2>Jonas Adam</h2>
                  </div>
                  <div className={styles.chatroomBox}>
                    <div className={styles.chatroomBoxContent}>
                      <div className={styles.textContent}>
                        <p>Permisi kak, mau tanya</p>
                        <div className={styles.statusInfo}>
                          <BsCheckAll
                            className={`${styles.statusIcon} ${styles.active}`}
                          />
                          02.14 PM
                        </div>
                      </div>
                      <div className={styles.userPict}>
                        <img src="/icons/profile.svg" alt="person" />
                      </div>
                    </div>
                    <div className={styles.hrLine}>
                      <div className={styles.line}></div>
                    </div>
                    <div className={styles.chatroomBoxStaff}>
                      <div className={styles.userPict}>
                        <img src="/icons/profile.svg" alt="person" />
                      </div>
                      <div className={styles.textContent}>
                        <p>Iya, silahkan</p>
                        <div className={styles.statusInfo}>
                          <BsCheckAll
                            className={`${styles.statusIcon} ${styles.active}`}
                          />
                          02.14 PM
                        </div>
                      </div>
                    </div>
                    <div className={styles.hrLine}>
                      <div className={styles.line}></div>
                    </div>
                    <div className={styles.chatroomBoxContent}>
                      <div className={styles.textContent}>
                        <p>Okay thank you</p>
                        <div className={styles.statusInfo}>
                          <BsCheckAll className={`${styles.statusIcon}`} />
                          02.14 PM
                        </div>
                      </div>
                      <div className={styles.userPict}>
                        <img src="/icons/profile.svg" alt="person" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.typeMessages}>
                    <div className={styles.typeBox}>
                      <input type="text" placeholder="Type a messages..." />
                      <div className={styles.icon}>
                        <RiSendPlaneFill className={styles.sendIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatroomLayout;
