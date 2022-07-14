import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MapDemo.css';
import Modal from './Modal';

const TryModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [member, setMember] = useState([]);

    // get delete
    useEffect(() => {
        axios.get('http://localhost:3000/member/all').then((res) => {
            console.log(res.data);
            setMember(res.data);
        });
    }, []);

    const clickHandler = () => {
        setIsOpen(true);
    };

    return (
        <>
            <button onClick={clickHandler}>Click</button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} time={10} bordY={-800}>
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
            </Modal>
        </>
    );
};

export default TryModal;
