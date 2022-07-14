import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalKid from './ModalKid';

const ModalDad = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="d-flex">
                <div className="col-4 bg-success"></div>
                <div className="col-8 bg-warning">
                    <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                    >
                        會員資料表
                    </Button>
                    <ModalKid
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </>
    );
};

export default ModalDad;
