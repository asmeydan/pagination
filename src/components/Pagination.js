import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import PagePagination from "./PagePagination";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [count] = useState(10);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPosts(res.data);
    };

    fetch();
  }, []);

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center pb-52 pt-5">
      <Posts posts={posts} count={count} page={page} />

      <PagePagination setPage={setPage} page={page} posts={posts} count={count} />
      <div></div>
    </div>
  );
};

export default Pagination;
