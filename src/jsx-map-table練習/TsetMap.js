import React from 'react';
import './MapDemo.css';
import data from './data/products.json';

const TsetMap = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>圖片</th>
                        <th>name</th>
                        <th>庫存</th>
                        <th>price</th>
                        <th>tags</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((v, i) => {
                        return (
                            <tr key={v.id}>
                                <td>
                                    <img src={v.picture} alt="" />
                                </td>
                                <td>{v.name}</td>
                                <td>{v.stock}</td>
                                <td>{v.price}</td>
                                <td>{v.tags}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TsetMap;
