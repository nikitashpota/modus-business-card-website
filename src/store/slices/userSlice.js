import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: null,
    token: null,
    id: null,
  },
};



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user.email = action.payload.email;
      state.user.token = action.payload.token;
      state.user.id = action.payload.id;
    },
    removeUser(state) {
      state.user.email = null;
      state.user.token = null;
      state.user.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
