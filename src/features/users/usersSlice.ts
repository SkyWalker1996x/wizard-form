import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  clearUsers,
  getUsers,
  postAddUser,
  postDeleteUser,
  postInsertUsers,
} from './api';
import { generateUsers } from 'utils/data';

import { RootState } from 'app/store';
import { ISendUserData, IUsersState } from 'types/users';

export const fetchItems = createAsyncThunk('users/fetchUsers', async (page: number) => {
  return getUsers(page);
});

export const addItem = createAsyncThunk('users/addUser', async (user: ISendUserData) => {
  await postAddUser(user);
  await localStorage.removeItem('userFormData');
});

export const deleteItem = createAsyncThunk(
  'users/deleteUser',
  async ({ id, page }: { id: number; page: number }) => {
    await postDeleteUser(id);
    return getUsers(page);
  }
);

export const generateItems = createAsyncThunk('users/generateUser', async () => {
  const generatedUsers = generateUsers();
  await clearUsers();
  await postInsertUsers(generatedUsers);

  return getUsers();
});

const initialState: IUsersState = {
  items: [],
  status: 'loading',
  page: 1,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increasePageNumber(state) {
      state.page = state.page + 1;
    },
    decreasePageNumber(state) {
      state.page = state.page - 1;
    },
  },
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

    // generate users
    builder.addCase(generateItems.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(generateItems.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.items = payload;
    });
    builder.addCase(generateItems.rejected, state => {
      state.status = 'error';
    });
  },
});

export const { increasePageNumber, decreasePageNumber } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.items;
export const selectUsersStatus = (state: RootState) => state.users.status;
export const selectPage = (state: RootState) => state.users.page;

export default usersSlice.reducer;
