import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';

const ManageInventory = () => {
    const [inventories, setInventories] = useInventory();
    return (
        <div className='container my-5'>
            {
                inventories.map(inventory => <div className='d-flex justify-content-between border mb-3 p-3 align-items-center'>
                    <h5>{inventory.name}</h5>
                    <button className='btn btn-dark'>X</button>
                </div>)
            }
            <div className='text-center mt-4'>
                <Link to="/add-item" className='btn btn-dark'>Add New Item</Link>
            </div>
        </div>
    );
};

export default ManageInventory;