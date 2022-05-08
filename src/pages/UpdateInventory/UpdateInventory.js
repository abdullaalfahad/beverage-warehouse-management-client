import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);
    const { _id, name, img, description, price, quantity, supplier } = inventory;
    const restockRef = useRef(0);

    const handleDelivered = (id) => {
        if (quantity > 0) {
            let { quantity, ...rest } = inventory;
            let newQuantity = quantity - 1;
            let newInventory = { quantity: newQuantity, ...rest };
            setInventory(newInventory);

            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newInventory),
            })
                .then(response => response.json())
                .then(data => {
                    alert('Delivered Successfully');
                })
        }
    }

    const handleRestock = id => {
        let restockNumber = restockRef.current.value;
        if (restockNumber > 0) {
            const { quantity, ...rest } = inventory;
            let newQuantity = parseInt(quantity) + parseInt(restockNumber);
            let newInventory = { quantity: newQuantity, ...rest };
            setInventory(newInventory);

            fetch(`http://localhost:5000/inventory/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newInventory),
            })
                .then(response => response.json())
                .then(data => {
                    alert('Restock Successfully');
                })
        }
        else {
            alert('Please enter positive number');
        }
        restockRef.current.value = "";
    }

    return (
        <div className='container my-5'>
            <Row lg={2} xs={1} className="d-flex align-items-center">
                <Col>
                    <img className='img-fluid' src={img} alt="" />
                </Col>
                <Col>
                    <h3>{name}</h3>
                    <h5>Price: {price}, Supplier: {supplier}</h5>
                    <h5>Quantity: {quantity}</h5>
                    <p><strong>Description:</strong> {description}</p>
                    <div>
                        <button className='btn btn-dark' onClick={() => handleDelivered(_id)}>Delivered</button>
                    </div>
                    <div className='mt-4 d-flex align-items-center'>
                        <input type="number" ref={restockRef} name='restock' placeholder='restock product' className='py-1 px-2' />
                        <button className='btn btn-dark' onClick={() => handleRestock(_id)}>Restock the items</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default UpdateInventory;