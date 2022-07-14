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
            <div className="d-flex justify-content-center">
                <input type={password ? 'text' : 'password'} />
                <button onClick={seePassword}>See Password</button>
            </div>
        </>
    );
};

export default SeePassword;
