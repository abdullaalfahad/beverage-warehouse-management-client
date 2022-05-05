import React from 'react';
import banner from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div className=''>
            <img className='img-fluid' src={banner} alt="bannerImage" />
        </div>
    );
};

export default Banner;