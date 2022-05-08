import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://blooming-mountain-98780.herokuapp.com/my-items?email=${user.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1>Items added: {items.length}</h1>
        </div>
    );
};

export default MyItems;