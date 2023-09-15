import React, { useState } from 'react';
import './InputTime.css';
import styled from 'styled-components';

const Inputs = styled.input`
  width: 228px;
  height: 57px;
  border-radius: 7px;
  flex-shrink: 0;
  font-size: 24px;
  color: #BABCBE;
  border: none;
`;

const Button = styled.button`
  border-radius: 56px;
  background: #FCEE21;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.50);
  color: #5B2386;
  font-size: 24px;
  font-weight: 700;
  padding: 21px 49px;
  gap: 10px;
  cursor: pointer;
  font-family: 'GmarketSansMedium';
  border: none;
`;


function InputTime() {
  const [enteredEdit, setEnteredEdit] = useState(false);
	const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTime, setEnteredTime] = useState("");


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

     if (enteredTitle.val !== '' && String(enteredTime).val !== '') {
    setEnteredEdit(true);
  } else {
     alert("입력되지 않았습니다.");
      setEnteredEdit(false);
  }
  }

  const inputClick = () => {
    setEnteredTime(Math.ceil(10000/enteredTime))
  }



  return (
    <>
    <form className='inputSec' onSubmit={submitHandler}>
      <p>나는 <Inputs type='text' placeholder='예)프로그래밍' onChange={titleChangeHandler}/> 전문가가 될 것이다.</p><br/>
      <p>그래서 앞으로 매일 하루에 <Inputs type='number' placeholder='예)5' onChange={timeChangeHandler}/> 시간씩 훈련 할 것이다.</p>

        <Button type='submit' className='btnSubmit' onClick={inputClick} style={{marginTop: "131px"}}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</Button>

        <img className='handImage' alt='hand' src='img/hand.png'/>
    </form>


    {enteredEdit && (<><p>당신은 <h1>{enteredTitle}</h1> 전문가가 되기 위해서<br/></p>
    <p>대략 <h1>{enteredTime} 일 이상 훈련하셔야 합니다.</h1></p></>)}
    {!enteredEdit && ""}

    </>
    

  )
}

export default InputTime;