import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from './store';


//Define a type for the slice state
interface CounterState {
    value: number,
    longPressValue: number,
  }
  
  //Define the initial state using that type
  const initialState: CounterState = {
    value: 0,
    longPressValue: 0,
  }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeCounterValueAction: (state, action: PayloadAction<number>) => {
      if((state.value + action.payload) <= 100 && (state.value + action.payload) >= 0){
        state.value += action.payload;
      }      
    },
    changeLongPressValueAction: (state, action: PayloadAction<number>) => {
      state.longPressValue += action.payload;
    },
    unpressButtonAction: (state) => { //reset the temp data
      state.longPressValue = 0;
    },
  }
})

export const { changeCounterValueAction, changeLongPressValueAction, unpressButtonAction } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;
export const selectButtonLongPressValue = (state: RootState) => state.counter.longPressValue;

export default counterSlice.reducer;