import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const MyOrders = () => {
    const { user, isLoading } = useAuth();
    const [orders, setOrders] = useState([]);

    const email = user?.email;
    useEffect(() => {
        fetch(`https://dark-alien-70597.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [email]);

    //Delete order
    const handleDelete = id => {
        const url = `https://dark-alien-70597.herokuapp.com/deleteOrder/${id}`
        fetch(url, {
            method: "DELETE",
            headers: { "content-type": "application.json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Are you sure to delete?')
                    const remaining = orders.filter(service => service._id !== id);
                    setOrders(remaining);
                }
            })
    }

    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };




    return (
        <div className="p-4 mx-auto">
            <h1>My Orders List:- {orders.length}</h1>
            <div className="row text-center mx-auto">
                {orders?.map((order) => (
                    <div className="col-md-6 col-lg-4 p-3" key={order._id}>
                        <div className="border rounded-3 p-2 bg-info">
                            <img src={order?.order.img} className="w-75 rounded-3" alt="" />
                            <h5>{order?.name}</h5>
                            <h4>{order.email}</h4>
                            <h5>{order.address}</h5>
                            <h5>{order.city}</h5>
                            <h5>Mobile-No.:{order.phone}</h5>
                            <h5>Package:{order?.order.name}</h5>
                            <h5>${order?.order.price}</h5>
                            <h5>{order?.order.duration}</h5>
                            <h6>Date:-{order?.date}</h6>
                            <button className="btn btn-warning">{order.status}</button> <br /><br />
                            <button onClick={() => handleDelete(order._id)} className="btn btn-danger px-4">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/"><button className="btn btn-success px-4">Go Back</button></Link>
        </div >
    );
};

export default MyOrders;