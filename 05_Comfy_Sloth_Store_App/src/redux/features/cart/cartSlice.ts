import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "cart slice",
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
