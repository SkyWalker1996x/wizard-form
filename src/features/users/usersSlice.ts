import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import db from 'app/indexedDB';
import { ICreateUserForm } from './create-user';

export const addItem = createAsyncThunk(
  'users/addUser',
  // @ts-ignore
  async (user: ICreateUserForm) => {
    const res = await db.table('users').add(user);

    return res;
  }
);

const initialState = {
  items: [],
  addItemStatus: '',
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
  extraReducers: builder => {
    builder.addCase(addItem.pending, state => {
      state.addItemStatus = 'loading';
    });
    builder.addCase(addItem.fulfilled, state => {
      state.addItemStatus = 'success';
    });
    builder.addCase(addItem.rejected, state => {
      state.addItemStatus = 'error';
    });
  },
});

export default usersSlice.reducer;
