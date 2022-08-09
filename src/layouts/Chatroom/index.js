import React from "react";
import Head from "next/head";
import styles from "./Chatroom.module.scss";
import Footer from "../../components/footer";
import { RiSendPlaneFill } from "react-icons/ri";
import Navbar from "../../components/navbar/navbar";

const ChatroomLayout = () => {
  return (
    <>
      <Head>
        <title>Chatroom</title>
      </Head>
      <Navbar />
      <div className={styles.chatroom}>
        <div className="container">
          <div className="row">
            <div className={`${styles.left} col-md-4`}>
              <div className={styles.leftBox}>
                <div className={styles.chatBox}>
                  <h1>Chat</h1>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.user}>
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
              <div className={styles.rightBox}>
                <div className={styles.chatRoom}>
                  <div className={styles.userInfo}>
                    <img src="/icons/user.svg" alt="user" />
                    <h2>Jonas Adam</h2>
                  </div>
                  <div className={styles.verticalLine}></div>
                  <div className={styles.chatContent}></div>
                  <div className={styles.typeMessages}>
                    <div className={styles.typeBox}>
                      <input type="text" placeholder="Type a messages..."/>
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
