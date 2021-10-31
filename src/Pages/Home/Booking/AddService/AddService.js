import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }
    return (
        <div className="addService p-4">
            <h1 className="text-secondary">Add a New Package Which You Like </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />

                <input {...register("img")} placeholder="Image url" />
                <input {...register("duration")} placeholder="Duration" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;