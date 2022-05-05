import React from 'react';
import { Row } from 'react-bootstrap';
import logo1 from '../../images/logo_1.png';
import logo2 from '../../images/logo_2.png';
import logo3 from '../../images/logo_3.png';
import logo4 from '../../images/logo_4.png';
import logo5 from '../../images/logo_5.png';
import logo6 from '../../images/logo_6.png';
import Partner from '../Partner/Partner';
import './Partners.css';

const Partners = () => {
    const partners = [
        { 'id': 1, 'img': logo1 },
        { 'id': 2, 'img': logo2 },
        { 'id': 3, 'img': logo3 },
        { 'id': 4, 'img': logo4 },
        { 'id': 5, 'img': logo5 },
        { 'id': 6, 'img': logo6 }
    ];
    return (
        <div id='partners' className='container py-5'>
            <h1 className='text-center mb-4 text-dark'>Our Partners</h1>
            <Row lg={6} md={3} xs={2} className="g-4">
                {
                    partners.map(partner => <Partner key={partner.id} partner={partner}></Partner>)
                }
            </Row>
        </div>
    );
};

export default Partners;