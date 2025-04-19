import { Link } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const ShowPhone = ({ singlePhone }) => {
    console.log(singlePhone)
    const { brand, image, model, name, description } = singlePhone || {}

    return (
        <div>
            <div className="card  w-96 shadow-sm">
                <figure>
                    <img className='rounded-md'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Mdel: {model}</p>
                    <p>Brand: {brand} </p>
                    <p> {description.slice(0, 70)}... </p>
                    <div className="card-actions justify-end">
                        <NavLink to="phonedetails">

                            <button className="btn  hover:bg-black hover:text-white duration-1000 hover:scale-110">Details</button>

                        </NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowPhone;