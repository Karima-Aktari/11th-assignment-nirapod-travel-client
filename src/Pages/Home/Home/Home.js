import React from 'react';
import Packages from '../Packages/Packages';
import Destinations from '../Destinations/Destinations';
import Messages from '../Messages/Messages';

const Home = () => {

    return (
        <div>
            <Packages></Packages>
            <Destinations></Destinations>
            <Messages></Messages>
        </div>
    );
};

export default Home;