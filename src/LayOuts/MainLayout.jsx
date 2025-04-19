import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <>
            <Navber></Navber>

            <div className='lg:min-h-[calc(100vh-284px)]'>
                <Outlet ></Outlet>
            </div>

            <Footer></Footer>
        </>
    );
};

export default MainLayout;