import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from './store';

// Define a type for the slice state
interface CounterState {
    value: number,
    buttonLongPressValue: number
  }
  
  // Define the initial state using that type
  const initialState: CounterState = {
    value: 0,
    buttonLongPressValue: 0
  }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      if((state.value + action.payload) <= 100)
        state.value += action.payload;
    }
  }
})

export const { increment  } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;
export const selectButtonLongPressValue = (state: RootState) => state.counter.buttonLongPressValue;

export default counterSlice.reducer;