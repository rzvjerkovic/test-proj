import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the ContainerA container
export const initialState: ContainerState = {
  value: 1,
};

const containerASlice = createSlice({
  name: 'containerA',
  initialState,
  reducers: {
    increaseCounterStart(state, action: PayloadAction<any>) {},
    increaseCounterSuccess(state, action: PayloadAction<any>) {
      state.value = state.value + 1;
    },
  },
});

export const { actions, reducer, name: sliceKey } = containerASlice;
