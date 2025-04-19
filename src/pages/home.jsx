import React, { useContext } from 'react'
import Header from '../components/header'
import HomeCarousel from '../components/homeCarousel'
import News from '../components/news'
import '../assets/css/home.css'
import Events from '../components/events'
import { motion } from 'motion/react'
import { GlobalContext } from '../contexts/globalContext'
import Rents from './rents'

const Home = () => {
  const { isMobile } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        id='carousel'>
        <HomeCarousel />
      </motion.section>

      <section id='news' className="flex flex-column md:flex-row gap-4 p-4">
        <div className="w-full md:w-6">
          <News />
        </div>
        <div className="w-full md:w-6">
          <Events />
        </div>
      </section>

      <section id='rents' className='p-4'>
        <Rents />
      </section>
    </>
  )
}

export default Home