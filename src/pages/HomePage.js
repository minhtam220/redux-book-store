import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import SearchForm from "../components/SearchForm";
import api from "../app/apiService";
import { FormProvider } from "../form";
import { useForm } from "react-hook-form";
import {
  Container,
  Alert,
  Box,
  Card,
  Stack,
  CardMedia,
  CardActionArea,
  Typography,
  CardContent,
} from "@mui/material";
import { getBooks } from "../features/book/actions";
import { useDispatch, useSelector } from "react-redux";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const HomePage = () => {
  const totalPage = 10;
  const limit = 10;

  //using Redux
  const books = useSelector((state) => state.book.books); // tai vi dat ten
  const pageNum = useSelector((state) => state.book.pageNum);
  const query = useSelector((state) => state.book.query);

  const navigate = useNavigate();
  const handleClickBook = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  /*current code
  const [books, setBooks] = useState([]);// no need
  const [pageNum, setPageNum] = useState(1);// no need

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");//no need
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleClickBook = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `/books?_page=${pageNum}&_limit=${limit}`;
        if (query) url += `&q=${query}`;
        const res = await api.get(url);
        setBooks(res.data);
        setErrorMessage("");
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [pageNum, limit, query]);

  //--------------form
  const defaultValues = {
    searchQuery: "",
  };
  const methods = useForm({
    defaultValues,
  });
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    setQuery(data.searchQuery);
  };

  */

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks(pageNum, query));
  }, [dispatch]);

  return (
    <Container>
      <Stack sx={{ display: "flex", alignItems: "center", m: "2rem" }}>
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Book Store
        </Typography>

        {books?.map((book) => (
          <Card
            key={book.id}
            sx={{
              width: "12rem",
              height: "27rem",
              marginBottom: "2rem",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={`${BACKEND_API}/${book.imageLink}`}
                alt={`${book.title}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {`${book.title}`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}

        {/*
          {errorMessage && <Alert severity="danger">{errorMessage}</Alert>}
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ sm: "center" }}
            justifyContent="space-between"
            mb={2}
          >
            <SearchForm />
          </Stack>
        </FormProvider>
        <PaginationBar
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={totalPage}
        />
      </Stack>
          
        }
        
      <div>
        {

        {loading ? (
          <Box sx={{ textAlign: "center", color: "primary.main" }}>
            <ClipLoader color="inherit" size={150} loading={true} />
          </Box>
        ) : (
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-around"
            flexWrap="wrap"
          >
            {books.map((book) => (
              <Card
                key={book.id}
                onClick={() => handleClickBook(book.id)}
                sx={{
                  width: "12rem",
                  height: "27rem",
                  marginBottom: "2rem",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={`${BACKEND_API}/${book.imageLink}`}
                    alt={`${book.title}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {`${book.title}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        )}
        }

      </div>*/}
      </Stack>
    </Container>
  );
};

export default HomePage;
