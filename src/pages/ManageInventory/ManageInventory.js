import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const ManageInventory = () => {
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
            {
                inventories.map(inventory => <div key={inventory._id} className='d-flex justify-content-between border mb-3 p-3 align-items-center'>
                    <h5>Name: {inventory.name}, Price: {inventory.price}, Quantity: {inventory.quantity}</h5>
                    <button onClick={() => handleDeleteItem(inventory._id)} className='btn btn-dark ms-2'>X</button>
                </div>)
            }
            <div className='text-center mt-4'>
                <Link to="/add-item" className='btn btn-dark'>Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageInventory;