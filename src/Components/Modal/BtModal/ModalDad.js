import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalKid from './ModalKid';

const ModalDad = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className='modalMember'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
            </div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                會員資料表
            </Button>
            <ModalKid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};

export default ModalDad;
