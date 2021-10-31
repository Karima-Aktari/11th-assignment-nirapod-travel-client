import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { bookingId } = useParams();
    const [booking, setBooking] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.order = booking;
        console.log(data);
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${bookingId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])


    return (
        <div className="p-4 bg-dark text-white">
            <div className="d-flex justify-content-around">
                <div className="p-4">
                    <img src={booking.img} className="img-fluid w-50 rounded-3" alt=""></img>
                    <h2>{booking.name}</h2>
                    <h5>$ {booking.price}</h5>
                    <h5>{booking.duration}</h5>
                    <p className="fw-bolder px-4">{booking.description}</p>
                </div>
                <div className="bookingForm w-75">
                    <h1 className="text-success">Confirm your Booking For {booking.name}</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <input placeholder="Phone Number" defaultValue="" {...register("phone")} />

                        <input type="submit" />
                    </form>
                    <Link to="/myOrders"><button className="btn btn-success">Your Orders</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Booking;