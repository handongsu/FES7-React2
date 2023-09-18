import React, { useEffect, useState } from 'react';
import './InputTime.css';
import styled from 'styled-components';
// import Loading from './Loading';

const Inputs = styled.input`
  width: 228px;
  height: 57px;
  border-radius: 7px;
  flex-shrink: 0;
  font-size: 24px;
  border: none;
  color: black;
  margin-bottom: 27px;
`;

export const Button = styled.button`
  border-radius: 56px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.50);
  font-size: 24px;
  font-weight: 700;
  padding: 10px 40px;
  cursor: pointer;
  font-family: 'GmarketSansBold';
  border: none;
  color: #5B2386;
  text-align: center;
  display: inline-flex; 
  gap: 10px;
`;


const Outputs = styled.span`
  color: #FFF;
  font-family: 'GmarketSansMedium';
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
`;


function InputTime({setEnteredModal}) {
  const [enteredEdit, setEnteredEdit] = useState(false);
	const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTime, setEnteredTime] = useState("");


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const timeChangeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  const inputClick = (e) => {
    if(enteredTime > 24 || enteredTime <= 0){
      alert("잘못된 값입니다. 시간을 다시 작성해 주세요.");
      setEnteredEdit(false);
      e.preventDefault(); //form 안에 있는 input값 동작을 중지
    } else {
      setEnteredTime(parseInt(10000/enteredTime));
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim() === '' && String(enteredTime).trim() === '') {
      alert("입력되지 않았습니다.");
      setEnteredEdit(false);
  }else {
    setEnteredEdit(true);
  }
}

  const UrlHandler = () => {
    alert('URL이 복사되었습니다.');
  }

  const ModalHandler = () =>{
    setEnteredModal(true);
  }

  //로딩 만들기
  


  return (
    <>
    <form className='inputSec' onSubmit={submitHandler}>
      <p>나는 <Inputs type='text' placeholder='예)프로그래밍' onChange={titleChangeHandler}/> 전문가가 될 것이다.<br/>
      그래서 앞으로 매일 하루에 <Inputs type='number' placeholder='예)5' onChange={timeChangeHandler}/> 시간씩 훈련 할 것이다.</p>

        <Button type='submit' className='btnSubmit' onClick={inputClick} style={{ backgroundColor:"#FCEE21", marginLeft:"30px"}}>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</Button>
        <img className='handImage' alt='hand' src='img/hand.png'/>
    </form>

    {enteredEdit && (<><p>당신은 <Outputs>{enteredTitle}</Outputs>  전문가가 되기 위해서<br/>
    대략  <Outputs>{enteredTime}</Outputs>  일 이상 훈련하셔야 합니다! :)</p><br/>
      <Button style={{backgroundColor:"#FCEE21", marginRight:"18px"}} onClick={ModalHandler}>훈련하러가기 GO!GO!</Button><Button style={{backgroundColor:"#FFF"}} onClick={UrlHandler}>공유하기</Button>
    </>)}
    {!enteredEdit && ""}
    </>
    

  )
}

export default InputTime;