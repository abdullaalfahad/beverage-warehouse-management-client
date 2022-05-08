import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);
    const { _id, name, img, description, price, quantity, supplier } = inventory;

    const handleDelivered = () => {
        if (quantity > 0) {
            const { quantity, ...rest } = inventory;
            const newQuantity = quantity - 1;
            const newInventory = { quantity: newQuantity, ...rest };
            setInventory(newInventory)
        }
    }

    return (
        <div className='container my-5'>
            <Row lg={2} xs={1}>
                <Col>
                    <img className='img-fluid' src={img} alt="" />
                </Col>
                <Col>
                    <h3>{name}</h3>
                    <h5>Price: {price}, Supplier: {supplier}</h5>
                    <h5>Quantity: {quantity}</h5>
                    <p><strong>Description:</strong> {description}</p>


                    <button className='btn btn-dark' onClick={handleDelivered}>Delivered</button>
                </Col>
            </Row>
        </div>
    );
};

export default UpdateInventory;