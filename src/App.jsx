import React, { useEffect } from 'react'
import { GlobalProvider } from './contexts/globalContext'
import Routes from './routes'
import { PrimeReactProvider } from 'primereact/api'
import Footer from './components/footer'
import { useLocation } from 'react-router-dom'

const App = () => {


  return (
    <PrimeReactProvider>
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </PrimeReactProvider>
  )
}

export default App