import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://blooming-mountain-98780.herokuapp.com/my-items?email=${user.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `https://blooming-mountain-98780.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='container my-5' style={{ height: '70vh' }}>
            <h1 className='text-center mb-4'>My Items</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Supplier</th>
                        <th>Options</th>
                    </tr>
                </thead>
                {
                    items.map(item => <tbody key={item._id}>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity}</td>
                            <td>{item.supplier}</td>
                            <td><button className='btn btn-dark' onClick={() => navigate(`/inventory/${item._id}`)}>Update</button>
                                <button onClick={() => handleDeleteItem(item._id)} className='btn btn-danger ms-2'>Delete</button></td>
                        </tr>
                    </tbody>)
                }
            </Table>
        </div>
    );
};

export default MyItems;