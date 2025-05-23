import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {

  let [width, setWidth] = useState(window.innerWidth);

  let updateDimention = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimention);
    return () => window.removeEventListener("resize", updateDimention);
  }, []);
  return (
    <>
      <style jsx>
        {`
      @media (max-width: 768px){
        .next,
        .prev{
          display: none;
        }
        .pagination{
          font-size: 14px;
        }
      }
      `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-success next"
        previousClassName="btn btn-success next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
