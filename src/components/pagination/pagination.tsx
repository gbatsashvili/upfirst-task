import React from "react";
import { PaginationStyled } from "./pagination.styled";

const Pagination = ({
  limit,
  total,
  currentPage,
  handlePagination,
}: {
  limit: number;
  total: number;
  currentPage: number;
  handlePagination: Function;
}) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    paginationNumbers.push(i);
  }

  const detectLastPage = total / limit;

  return (
    <PaginationStyled>
      <div
        className="paginationButton prevPage"
        onClick={() => {
          handlePagination(currentPage === 1 ? currentPage : currentPage - 1);
        }}
      >
        ←
      </div>
      {paginationNumbers.map((pageNumber) => (
        <div
          key={pageNumber}
          onClick={() => handlePagination(pageNumber)}
          className={
            currentPage === pageNumber
              ? "active paginationButton"
              : " paginationButton"
          }
        >
          {pageNumber}
        </div>
      ))}
      <div
        className="paginationButton nextPage"
        onClick={() => {
          handlePagination(
            currentPage === detectLastPage ? currentPage : currentPage + 1
          );
        }}
      >
        →
      </div>
    </PaginationStyled>
  );
};

export default Pagination;
