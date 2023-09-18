import React from 'react';
import './Modal.css';

export default function Modal({setModal}) {


  return (
    <div className='modal-backdrop'>
        <div className='modal'>
            <h2>회원이 되신것을 환영합니다!</h2>
            <button onClick={()=> setModal(false)}>닫기</button>
        </div>

    </div>
  )
}
