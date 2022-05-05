import React from 'react';
import { Col } from 'react-bootstrap';
import './partner.css'

const Partner = ({ partner }) => {
    const { img } = partner;
    return (
        <Col>
            <div className='partner'>
                <img className='img-fluid' src={img} alt="" />
            </div>
        </Col>
    );
};

export default Partner;