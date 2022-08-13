import { createSlice } from "@reduxjs/toolkit";
const initialState = { books: [] };
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
