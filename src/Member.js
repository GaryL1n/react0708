import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './jsx-map-table練習/MapDemo.css';

const Member = () => {
    const [member, setMember] = useState([]);

    // get delete
    useEffect(() => {
        axios.get('http://localhost:3000/member/all').then((res) => {
            console.log(res.data);
            setMember(res.data);
        });
    }, []);

    // post put from表單轉成物件
    // useEffect(() => {
    //     axios.post('http://localhost:3000/member/all',{sid:02,name:'Gary Lin'}).then((res) => {
    //         console.log(res.data);
    //         setMember(res.data);
    //     });
    // }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>sid</th>
                        <th>Name</th>
                        <th>Creat</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {member.map((v, i) => {
                        return (
                            <tr key={v.sid}>
                                <td>{v.sid}</td>
                                <td>{v.mem_name}</td>
                                <td>{v.mem_created_at}</td>
                                <td>{v.mem_avatar}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Member;
