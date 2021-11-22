import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('https://dark-alien-70597.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])

    //Spinner
    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };

    return (
        <div className="p-3">
            <h1>Select Your Best Package</h1>
            <div className="row mx-auto">
                {
                    packages.map(pack => <Package
                        key={pack._id}
                        pack={pack}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;