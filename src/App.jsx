import React, { useEffect } from 'react'
import { GlobalProvider } from './contexts/globalContext'
import Routes from './routes'
import { PrimeReactProvider } from 'primereact/api'

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