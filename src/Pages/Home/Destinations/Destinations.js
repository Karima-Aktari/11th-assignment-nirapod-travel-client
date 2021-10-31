import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destination, setDestination] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/destination')
            .then(res => res.json())
            .then(data => setDestination(data))
    }, [])
    return (
        <div>
            <h1 className="text-info p-3 bg-dark">See Our Best Popular Destination</h1>
            <div className="row mx-auto">
                {
                    destination.map(destination => <Destination
                        key={destination._id}
                        destination={destination}
                    ></Destination>)
                }
            </div>
        </div>
    );
};

export default Destinations;