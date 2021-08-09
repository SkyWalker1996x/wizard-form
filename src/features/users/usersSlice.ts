import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // init reducers for ts-requirements
    init: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export default usersSlice.reducer;
