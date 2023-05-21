import apiService from "../../app/apiService";
import { GET_BOOKS, SET_PAGENUM, SET_QUERY, VIEW_BOOK } from "./reducer";

export const getBooks = (pageNum, query, limit) => async (dispatch) => {
  try {
    //const limit = 10;
    let url = `/books?_page=${pageNum}&_limit=${limit}`;
    if (query) url += `&q=${query}`;
    const res = await apiService.get(url);
    console.log(res.data);
    dispatch({ type: GET_BOOKS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const setPageNum = (pageNum) => async (dispatch) => {
  dispatch({ type: SET_PAGENUM, payload: pageNum });
};

export const setQuery = (query) => async (dispatch) => {
  dispatch({ type: SET_QUERY, payload: query });
};

export const viewBook = (bookId) => async (dispatch) => {
  try {
    let url = `/books/${bookId}`;
    const res = await apiService.get(url);
    console.log(res.data);
    dispatch({ type: VIEW_BOOK, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
