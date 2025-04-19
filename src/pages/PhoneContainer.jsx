import React, { useEffect, useState } from 'react';
import ShowPhone from './ShowPhone';

const PhoneContainer = ({ phone }) => {
    const [displayPhone, setDisplayPhone] = useState([])
    const [showBtnClike, setShowBtnClike] = useState(false)
    useEffect(() => {
        showBtnClike ? setDisplayPhone(phone) : setDisplayPhone(phone.slice(0, 6))
    }, [phone,showBtnClike])

    return (
        <div>
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 '>
                {
                    displayPhone.map(phone => <ShowPhone singlePhone={phone} key={phone.id} ></ShowPhone>)
                }
            </div>
            <div className='my-2'>
                <button onClick={() =>{
                    setShowBtnClike(!showBtnClike)
                    showBtnClike || window.scroll(0,400)
                } } class="btn bg-white text-black btn-outline"> {showBtnClike ? "view less" : "view more..."} </button>
            </div>
        </div>
    );
};

export default PhoneContainer;