export const GET_BOOKS = "GET_BOOKS";
export const SET_PAGENUM = "SET_PAGENUM";
export const SET_QUERY = "SET_QUERY";
export const VIEW_BOOK = "VIEW_BOOK";

const initialState = {
  books: [],
  pageNum: 1,
  query: "",
};

const bookReducer = (state = initialState, action) => {
  //get the index from payload if it exists
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKS:
      return { ...state, books: payload };
    case SET_PAGENUM:
      return { ...state, pageNum: payload };
    case SET_QUERY:
      return { ...state, query: payload };
    default:
      return state;
  }
};

export default bookReducer;
