import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import db from 'app/indexedDB';
import { ICreateUserForm } from './create-user';

interface IUsersState {
  items: Array<ICreateUserForm>;
  status: string;
}

export const addItem = createAsyncThunk(
  'users/addUser',
  async (user: ICreateUserForm) => {
    const res = await db.table('users').add(user);

    return res as number;
  }
);

export const fetchItems = createAsyncThunk('users/fetchUsers', async () => {
  const res = await db.table('users').toArray();

  return res as Array<ICreateUserForm>;
});

const initialState: IUsersState = {
  items: [],
  status: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // add user
    builder.addCase(addItem.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(addItem.fulfilled, state => {
      state.status = 'success';
    });
    builder.addCase(addItem.rejected, state => {
      state.status = 'error';
    });

    // fetch users
    builder.addCase(fetchItems.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchItems.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.items = payload;
    });
    builder.addCase(fetchItems.rejected, state => {
      state.status = 'error';
    });
  },
});

export default usersSlice.reducer;
