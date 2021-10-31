import React from 'react';
import { Link } from 'react-router-dom';
const Package = ({ pack }) => {
    const { _id, img, name, description } = pack;

    return (
        <div className="col-12 col-md-6 col-lg-4 p-2">
            <div>
                <img src={img} className="w-75 rounded-3" alt=""></img>
                <h2>{name}</h2>
                <p>{description}</p>
                <Link to={`/booking/${_id}`}><button className="btn btn-secondary">Book Now</button></Link>
            </div>
        </div>
    );
};

export default Package;