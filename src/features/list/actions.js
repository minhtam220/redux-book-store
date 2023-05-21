import apiService from "../../app/apiService";
import { LIST_FAVORITES, ADD_BOOK, REMOVE_BOOK } from "./reducer";

export const listFavorites = () => async (dispatch) => {
  try {
    //const limit = 10;
    let url = `/favorites?`;
    let res = await apiService.get(url);
    console.log(res.data);
    dispatch({ type: LIST_FAVORITES, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    let url = `/favorites`;
    let res = await apiService.post(url, book);
    console.log(res.data);

    //get the new list after adding
    url = `/favorites?`;
    res = await apiService.get(url);
    dispatch({ type: ADD_BOOK, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const removeBook = (bookId) => async (dispatch) => {
  try {
    let url = `/favorites/${bookId}`;
    let res = await apiService.delete(url);

    //get the new list after removing
    url = `/favorites?`;
    res = await apiService.get(url);
    dispatch({ type: REMOVE_BOOK, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
