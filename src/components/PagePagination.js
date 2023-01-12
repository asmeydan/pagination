import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const PagePagination = ({ setPage, page, posts, count }) => {
  const [pageNumbers, setPageNumbers] = useState([
    page,
    page + 1,
    page + 2,
    page + 3,
    page + 4,
  ]);

  const prevHandle = () => {
    setPage((page) => page - 1);
    handlePage(page);
    console.log(page);
  };
  const nextHandle = () => {
    setPage((page) => page + 1);
    handlePage(page);
    console.log(page);
  };
  const handlePage = (i) => {
    if (i > 3 && i < posts.length / count - 2) {
      setPageNumbers([i - 2, i - 1, i, i + 1, i + 2]);
    }
  };

  return (
    <div className=" flex gap-2">
      <div
        className=" flex justify-center items-center border rounded py-2 px-3 border-gray-400 hover:bg-gray-400 cursor-pointer"
        onClick={() => {prevHandle()}}
      >
        <GrPrevious />
      </div>
      {page - 3 > 0 && (
        <div className="border rounded py-2 px-3 border-gray-200 text-gray-500">
          ...
        </div>
      )}
      {pageNumbers.map((i) => (
        <div
          className={`border rounded py-2 px-3 border-gray-400 hover:bg-gray-500 cursor-pointer ${
            i === page ? ` bg-gray-400` : ``
          }`}
          onClick={() => {
            setPage(i);
            handlePage(i);
          }}
          key={i}
        >
          {i}
        </div>
      ))}
      {posts.length / count - page + 3 > 0 && (
        <div className="border rounded py-2 px-3 border-gray-200 text-gray-500">
          ...
        </div>
      )}
      <div
        className=" flex justify-center items-center border rounded py-2 px-3 border-gray-400 hover:bg-gray-400 cursor-pointer"
        onClick={() => { nextHandle()}}
      >
        <GrNext />
      </div>
    </div>
  );
};

export default PagePagination;
