import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupRequest(state) {
      state.status = 'loading';
    },
    signupSuccess(state, action) {
      state.status = 'succeeded';
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    signupFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    loginRequest(state) {
      state.status = 'loading';
    },
    loginSuccess(state, action) {
      state.status = 'succeeded';
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { signupRequest, signupSuccess, signupFailure, loginRequest, loginSuccess, loginFailure, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
