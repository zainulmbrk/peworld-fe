import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import GetStarted from './components/GetStarted'
import Header from './components/Header'
import SkillTalent from './components/SkillTalent'
import Testimony from './components/Testimony'
import WhyUs from './components/WhyUs'
import Head from 'next/head'

const LandingpageLayout = () => {
  return (
    <>
    <Head>
        <title>Peworld</title>
    </Head>
    <Navbar/>
    <Header />
    <WhyUs />
    <SkillTalent />
    <Testimony />
    <GetStarted />
    <Footer/>
    </>
  )
}

export default LandingpageLayout