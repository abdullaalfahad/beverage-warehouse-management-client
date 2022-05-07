import React from 'react';
import { Row } from 'react-bootstrap';
import useInventory from '../../hooks/useInventory';
import InventoryDetails from '../InventoryDetails/InventoryDetails';

const Inventory = () => {
    const [inventories, setInventories] = useInventory();
    return (
        <div className='py-5 container'>
            <h1 className='text-center mb-4 text-dark'>Inventory</h1>
            <Row lg={3} md={2} className="g-4">
                {
                    inventories.map(inventory => <InventoryDetails key={inventory._id} inventory={inventory}></InventoryDetails>)
                }
            </Row>
            <div className='mt-4 text-center'>
                <button className='btn btn-outline-dark'>Manage Inventory</button>
            </div>
        </div>
    );
};

export default Inventory;