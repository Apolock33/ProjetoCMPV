import React from 'react'
import '../assets/css/index.css'
import { ProgressSpinner } from 'primereact/progressspinner'

const Loading = () => {
    return (
        <main className='flex justify-content-center align-items-center w-screen h-screen overflow-hidden'>
            <ProgressSpinner  />
        </main>
    )
}

export default Loading