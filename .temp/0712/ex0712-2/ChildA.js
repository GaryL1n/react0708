import React, { useState, useEffect } from 'react';

const ChildA = ({ setDataFromChild }) => {
    const [childData, setChildData] = useState('Child Data AAAAAAAAAAA');
    useEffect(() => {
        setDataFromChild(childData);
    }, [childData]);

    return (
        <>
            <h1>Child A</h1>
            <button
                onClick={() => {
                    setChildData(
                        '幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘幹你娘'
                    );
                }}
            >
                Click
            </button>
        </>
    );
};

export default ChildA;
