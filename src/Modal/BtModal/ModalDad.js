import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalKid from './ModalKid';

const ModalDad = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                會員資料表
            </Button>
            <ModalKid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};

export default ModalDad;
