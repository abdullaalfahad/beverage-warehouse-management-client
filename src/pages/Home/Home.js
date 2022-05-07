import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Inventory from '../Inventory/Inventory';
import Partners from '../Partners/Partners';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Partners></Partners>
            <Contact></Contact>
        </div>
    );
};

export default Home;