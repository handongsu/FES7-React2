import React, { useState } from 'react'
import Login from './Components2/Login';
import Homepage from './Components2/Homepage';
import Modal from './Components2/Modal';

export default function App3() {
const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: 1234
}

    const [login, setLogin] = useState(false);
    const [modal, setModal] = useState(true);

    return (
        <>
        {login ? <Homepage setLogin={setLogin}/> : <Login infoUser = {user} setLogin = {setLogin}/>}
       {modal && <Modal setModal={setModal}/>}
        </>
       
    );
}