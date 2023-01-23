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

  const pageHandle = (e)=> {
    setPage(e);
    console.log(page);
  }
  

  return (
    <div className=" flex gap-2">
      <div
        className=" flex justify-center items-center border rounded py-2 px-3 border-gray-400 hover:bg-gray-400 cursor-pointer" onClick={()=>{pageHandle(page - 1)}}>
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
          }`} key={i} onClick={()=>pageHandle(i)}>
          {i}
        </div>
      ))}
      {posts.length / count - page + 3 > 0 && (
        <div className="border rounded py-2 px-3 border-gray-200 text-gray-500">
          ...
        </div>
      )}
      <div
        className=" flex justify-center items-center border rounded py-2 px-3 border-gray-400 hover:bg-gray-400 cursor-pointer" onClick={()=>{pageHandle(page + 1)}}>
        <GrNext />
      </div>
    </div>
  );
};

export default PagePagination;
