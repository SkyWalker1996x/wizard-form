import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getUser, postModifyUser } from './api';

import { RootState } from 'app/store';
import { IUser } from 'types/users';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (id: string | number) => {
    return getUser(id);
  }
);

export const modifyUser = createAsyncThunk(
  'user/modifyUser',
  async ({ id, payload }: { id: number | string; payload: Partial<IUser> }) => {
    await postModifyUser(id, payload);
    return getUser(id);
  }
);

const initialState = {
  item: undefined,
  status: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // fetch user
    builder.addCase(fetchUser.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.item = payload;
    });
    builder.addCase(fetchUser.rejected, state => {
      state.status = 'error';
    });

    // modify user
    builder.addCase(modifyUser.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(modifyUser.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.item = payload;
    });
    builder.addCase(modifyUser.rejected, state => {
      state.status = 'error';
    });
  },
});

export const selectUser = (state: RootState) => state.selectedUser.item;
export const selectUserStatus = (state: RootState) => state.selectedUser.status;

export default userSlice.reducer;
