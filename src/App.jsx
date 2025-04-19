import React from 'react'
import { GlobalProvider } from './contexts/globalContext'
import Routes from './routes'
import { PrimeReactProvider } from 'primereact/api'
import Footer from './components/footer'

const App = () => {
  return (
    <PrimeReactProvider>
      <GlobalProvider>
        <Routes />
        <Footer />
      </GlobalProvider>
    </PrimeReactProvider>
  )
}

export default App