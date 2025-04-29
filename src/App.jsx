import React, { Suspense } from 'react'
import { GlobalProvider } from './contexts/globalContext'
import Routes from './routes'
import { PrimeReactProvider } from 'primereact/api'

const Loading = React.lazy(() => import('./components/loading'));

const App = () => {

  return (
    <PrimeReactProvider>
      <GlobalProvider>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </GlobalProvider>
    </PrimeReactProvider>
  )
}

export default App