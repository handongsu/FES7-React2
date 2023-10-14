import {atom, selector} from 'recoil';

export const textSize = atom({
  key: 'textSize',
  default: 20
});

export const textColor = atom({
  key: 'textColor',
  default: 'black'
});

export const resultState = atom({
  key: 'resultState',
  default: 0
})

export const bgcolor = selector({
  key: 'bgColor',
  get: ({get}) => {
    const size = get(textSize);
    if(size >= 60){
      return 'gray';
    }else{
      return 'skyblue';
    }
  }
});

export const customSize = selector({
  key: 'customSize',
  get: ({get}) => {},
  set: ({set}, value) => {
    set(textSize, (prevState) => prevState + Number(value));
  },
})