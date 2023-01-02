import React from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';

const PagePagination = ({ setPage, page}) => {
  return (
    <div className=" flex gap-2">
        <div
          className=" flex justify-center items-center border rounded py-2 px-3 border-gray-400 hover:bg-gray-400 cursor-pointer"
          onClick={() => setPage(page - 1)}
        >
          <GrPrevious/>
        </div>
        {[...Array(6)].map((x, i) => (
          <div
            className="border rounded py-2 px-3 border-gray-400 hover:bg-gray-400 cursor-pointer"
            onClick={() => setPage(i + 1)}
            key={i}
          >
            {i + 1}
          </div>
        ))}
        <div
          className=" flex justify-center items-center border rounded py-2 px-3 border-gray-400 hover:bg-gray-400 cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <GrNext/>
        </div>
      </div>
  )
}

export default PagePagination