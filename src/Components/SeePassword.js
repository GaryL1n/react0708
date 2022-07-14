import React, { useState } from 'react';

const SeePassword = () => {
    const [password, setPassword] = useState(false);

    const seePassword = () => {
        if (password === false) {
            setPassword(true);
        } else {
            setPassword(false);
        }
    };

    return (
        <>
            <input type={password ? 'text' : 'password'} />
            <button onClick={seePassword}>See Password</button>
        </>
    );
};

export default SeePassword;
