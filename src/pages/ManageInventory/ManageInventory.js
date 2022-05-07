import React from 'react';
import useInventory from '../../hooks/useInventory';

const ManageInventory = () => {
    const [inventories, setInventories] = useInventory();
    return (
        <div className='container'>
            {
                inventories.map(inventory => <div>
                    {inventory.name}
                </div>)
            }
        </div>
    );
};

export default ManageInventory;