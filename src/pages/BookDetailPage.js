import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { viewBook } from "../features/book/slice";
import { addBook } from "../features/list/slice";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const BookDetailPage = () => {
  const params = useParams();
  const bookId = params.id;
  //redux
  const currentBook = useSelector((state) => state.book.currentBook);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewBook({ bookId: bookId }));
  }, [dispatch, bookId]);

  const addToReadingList = (book) => {
    dispatch(addBook({ book: book }));
    toast.success("The book has been added to the reading list!");
  };

  return (
    <Container>
      {!currentBook ? (
        <Box sx={{ textAlign: "center", color: "primary.main" }}>
          <ClipLoader color="#inherit" size={150} loading={true} />
        </Box>
      ) : (
        <>
          <Grid
            container
            spacing={2}
            p={4}
            mt={5}
            sx={{ border: "1px solid black" }}
          >
            <Grid item md={4}>
              {currentBook && (
                <img
                  width="100%"
                  src={`${BACKEND_API}/${currentBook.imageLink}`}
                  alt=""
                />
              )}
            </Grid>
            <Grid item md={8}>
              {currentBook && (
                <Stack>
                  <h2>{currentBook.title}</h2>
                  <Typography variant="body1">
                    <strong>Author:</strong> {currentBook.author}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Year:</strong> {currentBook.year}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Country:</strong> {currentBook.country}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Pages:</strong> {currentBook.pages}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Language:</strong> {currentBook.language}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ width: "fit-content" }}
                    onClick={() => addToReadingList(currentBook)}
                  >
                    Add to Reading List
                  </Button>
                </Stack>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default BookDetailPage;
