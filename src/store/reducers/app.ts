import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IApp } from "../../models/app";

export const appSlice = createSlice({
  name: "app",
  initialState: {} as IApp,
  reducers: {}
});

export default appSlice.reducer;
