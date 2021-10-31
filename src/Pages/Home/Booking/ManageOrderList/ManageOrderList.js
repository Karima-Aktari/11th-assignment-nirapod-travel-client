import React from 'react';

const ManageOrderList = ({ booking, handleDelete }) => {
    const { _id, name, email, address, city, phone, status, date, order } = booking;


    return (
        <div className="col-12 col-md-6">
            <div className="py-3">
                <img src={order.img} className="w-75 rounded-3" alt="" />
                <h2>{name}</h2>
                <h4>{email}</h4>
                <h5>{address}</h5>
                <h5>{city}</h5>
                <h5>Mobile-No.:{phone}</h5>
                <h2>Package:{order.name}</h2>
                <h3>${order.price}</h3>
                <h4>{order.duration}</h4>
                <h4>Date:{date}</h4>
                <button className="btn btn-warning">{status}</button> <br /><br />
                <button onClick={() => handleDelete(_id)} className="btn btn-danger px-4">Delete</button>
            </div>
        </div>
    );
};

export default ManageOrderList;