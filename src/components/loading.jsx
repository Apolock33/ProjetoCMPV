import React from 'react'
import '../assets/css/index.css'
import { ProgressBar } from 'primereact/progressbar'

const Loading = () => {
    return (
        <main className='flex justify-content-center align-items-center w-screen h-screen overflow-hidden'>
            <ProgressBar mode="indeterminate" style={{ width: '300px', height: '6px' }} color='var(--primary-color)'></ProgressBar>
        </main>
    )
}

export default Loading