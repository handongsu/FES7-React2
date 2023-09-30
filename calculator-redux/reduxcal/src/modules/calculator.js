//액션을 생성하는 함수
export const onAddNumber = (number) => {
  return {type : 'ADD' , payload: number}
}

export const onSubtractNumber = (number) => {
  return {type: 'SUBTRACT', payload: number}
}

export const onMultiplyNumber = (number) => ({ type: 'MULTIPLY', payload: number });

export const onDivideNumber = (number) => ({ type: 'DIVIDE', payload: number });

export const onResetNumber = () => ({ type: 'RESET' });



// 리듀서 함수
const calculatorReducer = (state = 0, action) => {
  switch(action.type){
    case 'ADD':
      return (state = state + Number(action.payload));

    case 'SUBTRACT':
      return (state = state - Number(action.payload));

    case 'MULTIPLY':
      return (state = state * Number(action.payload));

    case "DIVIDE":
      return (state = state / Number(action.payload));

    case 'RESET':
      return (state = 0);

    default:
      return state;
  }
}

export default calculatorReducer;