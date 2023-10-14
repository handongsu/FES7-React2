import React from 'react'
import { useRecoilState,useResetRecoilState } from 'recoil'
import { resultState } from '../store/store'

export default function Counter() {
  const [Enteredcount, setEnteredCount] = useRecoilState(resultState);
  const resetCount = useResetRecoilState(resultState);
  return (
    <div>
      Count : {Enteredcount}
      <button onClick={() => setEnteredCount(Enteredcount + 1)}>Increase</button>
      <button onClick={resetCount}>리셋</button>
    </div>
  ) 
}
