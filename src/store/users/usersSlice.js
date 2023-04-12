import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: {},
});

export const { actions } = usersSlice;
export default usersSlice.reducer;
