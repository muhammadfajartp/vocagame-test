import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "users",
   initialState: {
      username: "xxx",
      nomorhp: "",
      password: "",
   },
   reducers: {
      update: (state, action) => {
         state.username = action.payload.username;
         state.nomorhp = action.payload.nomorhp;
         state.password = action.payload.password;
      },
   },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
