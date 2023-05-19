import apiService from "../../app/apiService";
import { GET_BOOKS } from "./reducer";

export const getBooks = (pageNum, query) => async (dispatch) => {
  try {
    const limit = 10;
    let url = `/books?_page=${pageNum}&_limit=${limit}`;
    if (query) url += `&q=${query}`;

    const res = await apiService.get(url);
    console.log(res.data);
    dispatch({ type: GET_BOOKS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
