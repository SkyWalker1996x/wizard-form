import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from 'app/indexedDB';

import { getUsers, postAddUser, postDeleteUser } from './api';

import { RootState } from 'app/store';
import { IUser, ISendUserData, IUsersState } from 'types/users';

export const fetchItems = createAsyncThunk('users/fetchUsers', async () => {
  return getUsers();
});

export const addItem = createAsyncThunk('users/addUser', async (user: ISendUserData) => {
  await postAddUser(user);
  await localStorage.removeItem('userFormData');
});

export const deleteItem = createAsyncThunk('users/deleteUser', async (id: number) => {
  postDeleteUser(id);
  const res = await db.table('users').toArray();

  return res as Array<IUser>;
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

    // delete user
    builder.addCase(deleteItem.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(deleteItem.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.items = payload;
    });
    builder.addCase(deleteItem.rejected, state => {
      state.status = 'error';
    });
  },
});

export const selectUsers = (state: RootState) => state.users.items;
export const selectUsersStatus = (state: RootState) => state.users.status;

export default usersSlice.reducer;
