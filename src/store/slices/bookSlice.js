import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (args, thunkApi) => {
    try {
      const response = await fetch("http://localhost:3005/books");
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = { books: [] };
const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      console.log("action from pending ,", action);
    },
    [getBooks.fulfilled]: (state, action) => {
      console.log("action from fulfilled :", action);
    },
    [getBooks.rejected]: (state, action) => {
      console.log("action from rejected :", action);
    },
  },
});

export const bookReducer = bookSlice.reducer;
