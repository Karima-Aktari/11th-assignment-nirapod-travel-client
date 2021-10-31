import React from 'react';

const Message = ({ message }) => {
    const { img, name, text } = message;

    return (
        <div className="col-12 col-md-6 p-4">
            <div className="bg-info p-4  rounded-3">
                <img src={img} className="w-50 rounded-pill bg-primary p-4" alt="" />
                <h3>{name}</h3>
                <h6>{text}</h6>
            </div>
        </div>
    );
};

export default Message;