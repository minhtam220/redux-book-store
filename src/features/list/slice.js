import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";

export const listFavorites = createAsyncThunk(
  "list/listFavorites",
  async () => {
    try {
      let url = `/favorites?`;
      let res = await apiService.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const addBook = createAsyncThunk("list/addBook", async ({ book }) => {
  try {
    let url = `/favorites`;
    let res = await apiService.post(url, book);
    console.log(res.data);

    //get the new list after adding
    url = `/favorites?`;
    res = await apiService.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const removeBook = createAsyncThunk(
  "list/removeBook",
  async ({ bookId }) => {
    try {
      let url = `/favorites/${bookId}`;
      let res = await apiService.delete(url);

      //get the new list after removing
      url = `/favorites?`;
      res = await apiService.get(url);

      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const listSlice = createSlice({
  name: "list",

  initialState: {
    books: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listFavorites.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export default listSlice.reducer;
