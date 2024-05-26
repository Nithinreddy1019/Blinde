import React from 'react';
import { NavBar } from './_components/nav-bar';


const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return(
        <div className=''>
            <NavBar />
            <div className='h-screen flex items-center justify-center'>
                {children}
            </div>
        </div>
    )
}


export default AuthLayout;