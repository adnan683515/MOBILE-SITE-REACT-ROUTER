import React from 'react';
import Hero from '../Components/Hero'
import { useLoaderData } from 'react-router';
import PhoneContainer from './PhoneContainer';


const Home = () => {
    const data = useLoaderData()

    return (
        <div>
            <div className='flex lg:justify-center lg:items-center'>
                <Hero ></Hero>
            </div>

            <PhoneContainer phone={data}></PhoneContainer>
        </div>
    );
};

export default Home;