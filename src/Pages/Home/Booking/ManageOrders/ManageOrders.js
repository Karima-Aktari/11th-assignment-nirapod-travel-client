import React, { useState } from 'react';
import { useEffect } from 'react';
import ManageOrderList from '../ManageOrderList/ManageOrderList';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    // Delete Order
    const handleDelete = id => {
        console.log(id);
        const url = `http://localhost:5000/deleteOrder/${id}`
        fetch(url, {
            method: "DELETE",
            headers: { "content-type": "application.json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are You Sure To DELETE')
                    const remaining = orders.filter(service => service._id !== id);
                    setOrders(remaining);
                }
            })
    }

    return (
        <div>
            <h1 className="pt-4">All Orders Are Here</h1>
            <div className="row mx-auto">
                {
                    orders?.map(order =>
                        <ManageOrderList
                            key={order._id}
                            booking={order}
                            handleDelete={handleDelete}
                        ></ManageOrderList>
                    )
                }
            </div>

        </div>
    );
};

export default ManageOrders;