import React from 'react';
import { Card, Col } from 'react-bootstrap';

const InventoryDetails = ({ inventory }) => {
    const { name, img, description, price, quantity, supplier } = inventory;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p className=''>Price: {price}</p>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <p className='mb-0'>Quantity: {quantity}</p>
                        <p className='mb-0'>Supplier Name: {supplier}</p>
                    </Card.Body>
                    <Card.Footer>
                        <button className='w-100 btn btn-dark'>Update</button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default InventoryDetails;