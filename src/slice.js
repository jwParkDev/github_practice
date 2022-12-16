import { createSlice } from '@reduxjs/toolkit';

export const CounterSlice = createSlice({
  name: 'CounterSlice',
  initialState: {v: 0},
  reducers: {
    up: (state, action) => {state.v += action.payload},
    down: (state, action) => {state.v -= action.payload},
  }
})