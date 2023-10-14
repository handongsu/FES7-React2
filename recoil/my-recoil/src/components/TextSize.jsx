import React, {useState} from 'react'
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {bgColor, customSize, textColor, textSize} from '../store/store';


export default function TextSize() {
  
  const [size, setSize] = useRecoilState(textColor);

  const color = useRecoilValue(textColor);

  const setColor = useSetRecoilState(textColor);
  return (
    <div>TextSize</div>
  )
}
