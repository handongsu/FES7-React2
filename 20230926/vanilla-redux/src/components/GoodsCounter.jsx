import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addNumber, subtractNumber } from '../modules/goodsCounter';

export default function GoodsCounter() {

  //store의 state 접근하도록 합니다.
  const {stock, goods} = useSelector((state) => { //redux 상태 스토어의 현재 상태 useSelector를 이용하여 state에서 필요한 상태 값을 추출, 해당 상태 값을 stock 및 goods 변수에 할당
    return {
      stock: state.goodsReducer.stock,
      goods: state.goodsReducer.goods,
    }
  });

  const dispatch = useDispatch(); // 코드를 이해하기 쉽고, 유지보수가 용이하게 하기 위해 변수에 할당

  //디스패치 함수에  액션을 인자로 전달하여 실행합니다.
  const onSubtractNumber = () => dispatch(subtractNumber())
  const onAddNumber = () => dispatch(addNumber())


  return (
    <div>
      <h1>Product Detail</h1>
  <h2>딥러닝 개발자 무릎 담요</h2>
  <span><strong>17,500</strong>원</span>
  <div id="counter-box">
    <button type="button" id="minus" onClick={onSubtractNumber} disabled={goods > 0 ? false : true}>MINUS</button>
    <span id="number">{goods}</span>
    <button type="button" id="plus" onClick={onAddNumber} disabled = {stock > 0 ? false : true}>PLUS</button>
  </div>
  <div>총 수량 <strong id="quantity">{goods}</strong></div>
  <div><strong id="total">{goods * 17500}</strong>원</div>
  <div>
    재고 <strong>{stock}</strong>
  </div>
    </div>
  )
}
