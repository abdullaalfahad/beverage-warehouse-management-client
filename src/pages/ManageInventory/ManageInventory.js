import React from 'react';
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
                <button className='btn btn-dark'>Add New Item</button>
            </div>
        </div>
    );
};

export default ManageInventory;