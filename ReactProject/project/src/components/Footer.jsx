import React from 'react'
import styled from 'styled-components';

const FooterContent = styled.p`
  color: #FFF;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  font-family: 'Noto Sans KR', sans-serif;
`;



function Footer() {
  return (
    <div style={{marginTop : '130px'}}>
      <img className="wenivImage" alt="weniv" src="img/위니브.png" />
      <FooterContent>※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br/> 수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</FooterContent>
    </div>
  )
}

export default Footer;