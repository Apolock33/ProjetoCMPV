import React from 'react'
import Header from '../components/header'
import HomeCarousel from '../components/homeCarousel'
import News from '../components/news'

const Home = () => {
  return (
    <>
      <Header />
      <section id='carousel'>
        <HomeCarousel />
      </section>
      <section id='news' className='flex justify-content-between px-5 py-3'>
        <News />
      </section>
    </>
  )
}

export default Home