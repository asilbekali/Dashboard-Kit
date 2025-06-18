import React from 'react'
import NavBar from '../modules/NavBar'
import Header from '../modules/Header'
import PageRoutes from '../Routes'

const Layout = () => {
    return (
        <div className='flex justify-between'>
            <NavBar />
            <div className='w-[78%] p-[30px] h-[100vh] overflow-y-auto'>
                <Header />
                <PageRoutes />
            </div>
        </div>
    )
}

export default Layout