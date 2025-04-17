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
      <section id='news' >
        <News />
      </section>
    </>
  )
}

export default Home