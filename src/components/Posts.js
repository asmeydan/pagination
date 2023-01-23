import React from "react";

const Posts = ({ posts, count, page }) => {
  return (
    <ul className="w-full flex flex-col justify-center items-center gap-8 px-[10%] md:px-[25%] mb-10">
      {posts.slice((page - 1) * count, (page * count)).map((post)=> (
        
        <li key={post.id} className=" border-2 w-full flex justify-between items-center rounded-xl overflow-hidden">
          <img src={post.thumbnailUrl} alt={post.id} />
          {post.title}
          <div></div>
        </li>

      ))}
    </ul>
  );
};

export default Posts;
