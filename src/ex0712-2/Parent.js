import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent = () => {
    const [dataFromChild, setDataFromChild] = useState('')
    return (
        <>
            <h1>Parent</h1>
            <p>{dataFromChild}</p>
            <ChildA setDataFromChild={setDataFromChild} />
            <ChildB dataFromChild={dataFromChild} />
        </>
    );
};

export default Parent;
