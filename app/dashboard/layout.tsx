import React from 'react'
import Navbar from './_components/Navbar';
import Header from './_components/Header';

const DashboardPage = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <div className="md:w-64 hidden md:block fixed">
                <Navbar />
            </div>
            <div className='md:ml-64'>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default DashboardPage