import React from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import './ManageInventory.css'

const ManageInventory = () => {
    const navigate = useNavigate();
    const [inventories, setInventories] = useInventory();
    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                })
        }
    }

    return (
        <div className='container my-5'>
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
                    inventories.map(inventory =>
                        <tbody key={inventory._id}>
                            <tr>
                                <td>{inventory.name}</td>
                                <td>{inventory.price}</td>
                                <td>{inventory.quantity}</td>
                                <td>{inventory.price * inventory.quantity}</td>
                                <td>{inventory.supplier}</td>
                                <td><button className='btn btn-dark' onClick={() => navigate(`/inventory/${inventory._id}`)}>Update</button>
                                    <button onClick={() => handleDeleteItem(inventory._id)} className='btn btn-danger ms-2'>Delete</button></td>
                            </tr>
                        </tbody>
                    )
                }
            </Table>
            <div className='text-center mt-4'>
                <Link to="/add-item" className='btn btn-dark'>Add New Item</Link>
            </div>
        </div >
    );
};

export default ManageInventory;