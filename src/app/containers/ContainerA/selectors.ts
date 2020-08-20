import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.containerA || initialState;

export const selectContainerA = createSelector(
  [selectDomain],
  containerAState => containerAState,
);
