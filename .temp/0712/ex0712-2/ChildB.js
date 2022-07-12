import React from 'react';

const ChildB = ({ dataFromChild }) => {
    return (
        <>
            <h1>Child B</h1>
            <p>{dataFromChild}</p>
        </>
    );
};

export default ChildB;
