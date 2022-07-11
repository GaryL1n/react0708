import React from 'react';
import { data } from './data/student';

const MapDemo = () => {
    return (
        <>
            <h1>Map展示</h1>
            <ul>
                {/* 有sid用sid
                沒有sid用uuid
                資料完全不會再變動才能用index */}
                {data.map((v, i) => {
                    return <li key={v.id}>{v.name}</li>;
                })}
            </ul>
        </>
    );
};

export default MapDemo;
