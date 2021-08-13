import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import db from 'app/indexedDB';

export const fetchUser = createAsyncThunk('user/fetchUser', async (id: string) => {
  const res = await db.table('users').get(+id);

  return res;
});

const initialState = {
  item: {},
  status: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
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
  },
});

export default userSlice.reducer;
