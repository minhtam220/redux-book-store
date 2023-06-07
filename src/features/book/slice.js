import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async ({ pageNum, query, limit }) => {
    try {
      console.log("pageNum, query, limit" + pageNum, query, limit);
      let url = `/books?_page=${pageNum}&_limit=${limit}`;
      if (query) url += `&q=${query}`;
      const res = await apiService.get(url);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const viewBook = createAsyncThunk(
  "book/viewBook",
  async ({ bookId }) => {
    try {
      let url = `/books/${bookId}`;
      let res = await apiService.get(url);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const bookSlice = createSlice({
  name: "book",

  initialState: {
    books: [],
    pageNum: 1,
    query: "",
    currentBook: null,
  },
  reducers: {
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
      console.log("state.pageNum" + state.pageNum);
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    builder.addCase(viewBook.fulfilled, (state, action) => {
      state.currentBook = action.payload;
    });
  },
});

export const { setPageNum, setQuery } = bookSlice.actions;
export default bookSlice.reducer;
