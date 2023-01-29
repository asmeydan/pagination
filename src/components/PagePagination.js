import React, { useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const PagePagination = ({ setPage, page, posts, count }) => {
  const [totpage] = useState(posts.length / count)
  const [pageNumbers, setPageNumbers] = useState([
    page + 1,
    page + 2,
    page + 3,
    page + 4,
  ]);

  useEffect(()=> {
    if(page < 4) {
      setPageNumbers([2, 3, 4])
    }
    else if( page > totpage - 3) {
      setPageNumbers([totpage - 3, totpage - 2, totpage - 1])
    }
    else {
      setPageNumbers([page - 1, page, page + 1])
    }
  }, [page, totpage])

  const pageHandle = (e) => {
    setPage(e);
  };

  return (
    <div className=" flex gap-2">
      <div
        className=" flex justify-center items-center border rounded py-2 px-3 border-gray-400 hover:bg-gray-400 cursor-pointer"
        onClick={() => {
          pageHandle(page - 1);
        }}
      >
        <GrPrevious />
      </div>
      <div
        className={`border rounded py-2 px-3 border-gray-400 hover:bg-gray-500 cursor-pointer ${
          1 === page ? ` bg-gray-400` : ``
        }`}
        onClick={() => pageHandle(1)}
      >
        1
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
          key={i}
          onClick={() => pageHandle(i)}
        >
          {i}
        </div>
      ))}
      {posts.length / count - page - 2 > 0 && (
        <div className="border rounded py-2 px-3 border-gray-200 text-gray-500">
          ...
        </div>
      )}
      <div
        className={`border rounded py-2 px-3 border-gray-400 hover:bg-gray-500 cursor-pointer ${
          posts.length / count === page ? ` bg-gray-400` : ``
        }`}
        onClick={() => pageHandle(posts.length / count)}
      >
        {posts.length / count}
      </div>
      <div
        className=" flex justify-center items-center border rounded py-2 px-3 border-gray-400 hover:bg-gray-400 cursor-pointer"
        onClick={() => {
          pageHandle(page + 1);
        }}
      >
        <GrNext />
      </div>
    </div>
  );
};

export default PagePagination;
