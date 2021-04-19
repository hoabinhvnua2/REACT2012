import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState('Tin');
    const [err, setErr] = useState('')

    const handleCong = () => {
        setCount(count + 1)
    }

    const handleTru  = () => {
        setCount(count -1)
    }
    console.log('user', users)
    return (
        <div>
            <p>{users}</p>
            <p>{ count }</p>
            <button onClick={handleCong}>+</button>
            <button onClick={handleTru}>-</button>
        </div>
    );
};

export default Count;