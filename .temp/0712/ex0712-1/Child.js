import React from 'react';

const Child = (props) => {
    const { bitch, hello, name, setName } = props;
    return (
        <>
            <h1>{bitch}</h1>
            <h1>{hello}</h1>
            <button
                onClick={() => {
                    setName('Gary Lin');
                }}
            >
                Click
            </button>
            <button
                onClick={() => {
                    setName('');
                }}
            >
                Clean
            </button>
            <h1>{name}</h1>
        </>
    );
};

export default Child;
