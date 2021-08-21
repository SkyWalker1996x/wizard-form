import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  clearUsers,
  getUsers,
  postAddUser,
  postDeleteUser,
  postInsertUsers,
  getUsersTotal,
} from './api';
import { generateUsers } from 'utils/data';

import { RootState } from 'app/store';
import { ISendUserData, IUsersState } from 'types/users';

export const fetchItems = createAsyncThunk(
  'users/fetchUsers',
  async ({ page, perPage }: { page: number; perPage: number }) => {
    const total = await getUsersTotal();
    const users = await getUsers({ page, perPage });

    return { total, users };
  }
);

export const addItem = createAsyncThunk('users/addUser', async (user: ISendUserData) => {
  await postAddUser(user);
  await localStorage.removeItem('userFormData');
});

export const deleteItem = createAsyncThunk(
  'users/deleteUser',
  async ({ id, page, perPage }: { id: number; page: number; perPage: number }) => {
    await postDeleteUser(id);
    return getUsers({ page, perPage });
  }
);

export const generateItems = createAsyncThunk('users/generateUser', async () => {
  const generatedUsers = generateUsers();
  await clearUsers();
  await postInsertUsers(generatedUsers);
  const items = await getUsers({});
  const total = await getUsersTotal();

  return { items, total };
});

const initialState: IUsersState = {
  items: [],
  status: 'loading',
  page: 1,
  total: 0,
  perPage: 3,
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
    definePageNumber(state, { payload }) {
      state.page = payload;
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
      state.items = payload.users;
      state.total = payload.total;
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
      state.items = payload.items;
      state.total = payload.total;
    });
    builder.addCase(generateItems.rejected, state => {
      state.status = 'error';
    });
  },
});

export const { increasePageNumber, decreasePageNumber, definePageNumber } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.items;
export const selectUsersStatus = (state: RootState) => state.users.status;
export const selectPage = (state: RootState) => state.users.page;
export const selectPerPage = (state: RootState) => state.users.perPage;
export const selectTotal = (state: RootState) => state.users.total;

export default usersSlice.reducer;
