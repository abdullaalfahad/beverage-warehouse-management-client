import './AddItem.css';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = event => {
        event.preventDefault();
        const newItem = {
            email: user.email,
            name: event.target.name.value,
            img: event.target.img.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplier: event.target.supplierName.value
        }
        fetch('https://blooming-mountain-98780.herokuapp.com/inventory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Item added successfully');
                    event.target.reset();
                }
            })
    }
    return (
        <div className='w-50 mx-auto my-5 add-item'>
            <h1 className='text-center mb-4'>Add New Item</h1>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupImg">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" name='img' placeholder="Product Image" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name='price' placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name='quantity' placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupSupplierName">
                    <Form.Label>Supplier Name</Form.Label>
                    <Form.Control type="text" name='supplierName' placeholder="Supplier Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name='description' rows={5} placeholder="Description" required />
                </Form.Group>
                <input style={{ border: '1px solid #ced4da' }} className='w-100 p-2 btn btn-dark' type="submit" value="Add Item" />
            </Form>
        </div>
    );
};

export default AddItem;