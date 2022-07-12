import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import './MapDemo.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const ReactModal = () => {
    const [member, setMember] = useState([]);

    // get delete
    useEffect(() => {
        axios.get('http://localhost:3000/member/all').then((res) => {
            console.log(res.data);
            setMember(res.data);
        });
    }, []);

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="ttt">
                    <button onClick={closeModal}>close</button>
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
                </div>
            </Modal>
        </>
    );
};

export default ReactModal;
