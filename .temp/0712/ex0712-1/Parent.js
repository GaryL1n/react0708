import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [name, setName] = useState('');
    return (
        <>
            <Child bitch="婊子" hello="妳好" name={name} setName={setName} />
        </>
    );
};

export default Parent;
