import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "user slice",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
