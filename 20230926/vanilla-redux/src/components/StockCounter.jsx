import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { soldOut, sale } from '../modules/stockCounter'

export default function StockCounter() {

  const {message} = useSelector((state) => {
    return {
      message: state.stockReducer.message
    }
  })

  const {stock} = useSelector((state) =>{
    return {
      stock: state.goodsReducer.stock,
    }
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if(stock <= 0){
      dispatch(soldOut())
    }else {
      dispatch(sale())
    }
  },[stock])

  return (
    <div>{message}</div>
  )
}
