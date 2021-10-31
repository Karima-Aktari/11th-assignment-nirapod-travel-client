import React, { useState } from 'react';
import { useEffect } from 'react';
import ManageOrderList from '../ManageOrderList/ManageOrderList';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('https://dark-alien-70597.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    // Delete Order
    const handleDelete = id => {
        const url = `https://dark-alien-70597.herokuapp.com/deleteOrder/${id}`
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
    // Spinner setting
    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };



    return (
        <div className="p-3 bg-secondary">
            <h1 className="pt-2">All Orders Are Here</h1>
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
            <Link to="/"><button className="btn btn-success px-4">Go Back</button></Link>
        </div>
    );
};

export default ManageOrders;