import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { setPageNum } from "../features/book/actions";
import { useDispatch, useSelector } from "react-redux";

const PaginationBar = ({ pageNum, totalPageNum }) => {
  const dispatch = useDispatch();

  const handlePageChange = (event, value) => {
    dispatch(setPageNum(value));
    console.log();
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPageNum}
        page={pageNum}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default PaginationBar;
