import React from 'react';
import Mobile from '../assets/Mobile.png'
import { Phone } from 'lucide-react';

const Hero = () => {
    return (
        <div>
            <div className='lg:w-[50%] py-10 mx-auto'>
                <div className='text-center space-y-4'>
                    <div>
                        <img src={Mobile} alt="" />
                    </div>
                    <h1 className='text-2xl font-semibold'>Browse, Search, View, Buy</h1>
                    <p>Best place to browse, search, view details and purchase of top flagship phones
                        of the current time - FlagshipFaceOff</p>
                    <div className='flex w-full justify-center items-center'>
                        <div className='flex w-full mx-auto gap-3'>
                            <div className='w-full'>
                                <input placeholder='search by name' className='bg-white px-10 w-full py-3 rounded-md text-black' type="text" />
                            </div>
                            <div className='flex justify-center items-center'>
                                <button className="btn btn-neutral bg-white hover:bg-black hover:text-white hover:scale-105 duration-1000 btn-outline">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Phone></Phone>

        </div>
    );
};

export default Hero;