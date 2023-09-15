import React from 'react'
import styled,{css} from 'styled-components';
import './Section.css';

const fontCss = css`
  font-family: 'OTEnjoystoriesBA';
  font-style: normal;
  font-weight: 700;
`

const TextYellow = styled.p`
  color: #F5DF4D;
  margin: 40px;
  font-size: 36px;
  ${fontCss};
`;

function Section() {
  return (
    <div className='section'>
        <TextYellow>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</TextYellow>
        <div className='commaBox'>
            <img className="commaImage" alt="comma" src="img/leftcomma.png" />
            <p><strong>1만 시간의 법칙</strong>은 <br/>
            어떤 분야의 전문가가 되기 위해서는<br />
            최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </p>
            <img className='commaImage2' alt='comma' src='img/rightcomma.png'/>
        </div>
        
    </div>
  )
}

export default Section