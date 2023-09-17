import React from 'react'
import styled from 'styled-components';



const Back = styled.div`
  width: 100%; /* 페이지 너비에 따라 확장 */
  max-width: 700px; 
  position: fixed;
  inset: 0;
  margin: auto;
  height: fit-content;
  z-index: 100;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.50);
  
`;

const TitleFont = styled.p`
  color: #5B2386;
  text-align: center;
  font-family: 'OTEnjoystoriesBA';
  font-weight: 700;
  margin: 0;
`;

const Buttons = styled.button`
  border-radius: 56px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.50);
  font-size: 24px;
  font-weight: 700;
  padding: 21px 49px;
  cursor: pointer;
  font-family: 'GmarketSansMedium';
  border: none;
  color: #5B2386;
  font-weight: 700;
`;

function Modal({setEnteredModal}) {

  return (
    <Back>
      <TitleFont style={{fontSize:"96px"}}>화이팅!!♥♥♥</TitleFont>
      <TitleFont style={{fontSize:"36px"}}>당신의 꿈을 응원합니다!</TitleFont>
      <img className='lionImage' alt='lion' src='img/lion.png'/>
      <Buttons style={{backgroundColor:"#FCEE21", marginBottom:"68px"}} onClick={() => setEnteredModal(false)}>종료하고 진짜 훈련하러 가기 GO!GO!</Buttons>
    </Back>
  )
}

export default Modal