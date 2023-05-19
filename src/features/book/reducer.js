export const GET_BOOKS = "GET_BOOKS";
export const VIEW_BOOK = "VIEW_BOOK";

const initialState = {
  books: [],
  pageNum: 1,
  query: "divine",
};

const bookReducer = (state = initialState, action) => {
  //get the index from payload if it exists
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKS:
      return { ...state, books: payload };
    default:
      return state;
  }
};

export default bookReducer;
