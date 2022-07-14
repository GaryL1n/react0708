import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './MapDemo.css';

const ModalKid = (props) => {
    const [member, setMember] = useState([]);

    // get delete
    useEffect(() => {
        axios.get('http://localhost:3000/member/all').then((res) => {
            console.log(res.data);
            setMember(res.data);
        });
    }, []);
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="modalhead">
                    <Modal.Title id="contained-modal-title-vcenter">
                        會員資料
                    </Modal.Title>
                    <Button className="btbt" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body className="modalbody">
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
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btbt" onClick={props.onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalKid;
