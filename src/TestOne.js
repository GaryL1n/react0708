import React, { useState } from 'react';
// import TsetMap from './jsx-map-table練習/TsetMap';
// import JSXDemo from './ex0711-1/JSXDemo';
// import MapDemo from './ex0711-2/MapDemo';
import './App.css';

const TestOne = () => {
    const [click, SetClick] = useState(false);
    const [click2, SetClick2] = useState(false);
    const [click3, SetClick3] = useState(false);
    function clickTrue() {
        SetClick(true);
        SetClick2(false);
        SetClick3(false);
    }
    function clickTrue2() {
        SetClick(false);
        SetClick2(true);
        SetClick3(false);
    }
    function clickTrue3() {
        SetClick(false);
        SetClick2(false);
        SetClick3(true);
    }
    return (
        <>
            <ul>
                <li>
                    <a className={click ? 'active' : ''} onClick={clickTrue}>
                        首頁
                    </a>
                </li>
                <li>
                    <a className={click2 ? 'active' : ''} onClick={clickTrue2}>
                        關於我們
                    </a>
                </li>
                <li>
                    <a className={click3 ? 'active' : ''} onClick={clickTrue3}>
                        產品
                    </a>
                </li>
            </ul>
        </>
    );
};

export default TestOne;
