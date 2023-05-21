export const LIST_FAVORITES = "LIST_FAVORITES";
export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

const initialState = {
  books: [
    {
      author: "Chinua Achebe",
      country: "Nigeria",
      imageLink: "images/things-fall-apart.jpg",
      language: "English",
      link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      pages: 209,
      title: "Things Fall Apart",
      year: 1958,
      id: "8F627C92410",
    },
  ],
};

const listReducer = (state = initialState, action) => {
  //get the index from payload if it exists
  const { type, payload } = action;

  switch (type) {
    case LIST_FAVORITES:
      return { ...state, books: payload };
    case ADD_BOOK:
      return { ...state, books: payload };
    case REMOVE_BOOK:
      return { ...state, books: payload };
    default:
      return state;
  }
};

export default listReducer;
