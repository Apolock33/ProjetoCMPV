import React from 'react'
import { Outlet } from 'react-router-dom'
import WppButton from './wppButton'

const blankLayout = () => {
    return (
        <>
            <Outlet />
            <WppButton />
        </>
    )
}

export default blankLayout