import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="p-4 text-danger bg-dark">
            <h1>404</h1>
            <h1>This Page Is Not Found</h1>
            <Link to="/"><button className="btn btn-warning">Go Back</button></Link>
        </div>
    );
};

export default NotFound;