import React from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationDivide(totalPage, perPage, currentPage, back, forward) {
  return (
    <div>
      <Pagination>
        <Pagination.Prev
          onClick={() => back()}
          disabled={currentPage <= 1 ? false : true}
        />
        <Pagination.Item>{currentPage}</Pagination.Item>
        <Pagination.Next
          onClick={() => forward()}
          disabled={
            currentPage > Math.ceil(+totalPage / +perPage) ? false : true
          }
        />
      </Pagination>
    </div>
  );
}

export default PaginationDivide;
