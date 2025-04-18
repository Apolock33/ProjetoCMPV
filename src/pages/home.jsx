import React from 'react'
import Header from '../components/header'
import HomeCarousel from '../components/homeCarousel'
import News from '../components/news'
import ContactForm from '../components/contactForm'

const Home = () => {
  return (
    <>
      <Header />
      <section id='carousel'>
        <HomeCarousel />
      </section>
      <section id='news'>
        <News />
      </section>
      <section id='contacts'>
        <ContactForm />
      </section>
    </>
  )
}

export default Home