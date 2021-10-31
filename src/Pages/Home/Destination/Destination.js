import React from 'react';

const Destination = ({ destination }) => {
    const { img, name, description } = destination;
    return (
        <div className="col-12 col-md-6">
            <div className="d-flex justify-content-around  p-3 bg-secondary m-3 rounded-3">
                <img src={img} className="w-50 rounded-3" alt="" />
                <div className="text-align-center">
                    <h4>{name}</h4>
                    <h6>{description}</h6>
                </div>
            </div>

        </div>
    );
};

export default Destination;