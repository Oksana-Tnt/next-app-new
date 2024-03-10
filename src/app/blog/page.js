import React from "react";
import style from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

//Fetch data with an API
const getData = async () => {
  const res = await fetch("https://next-app-new-iota.vercel.app/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {
  //Fetch data with an API
  const posts = await getData();

  //Fetch data without an API
  // const posts = await getPosts();
  return (
    <div className={style.container}>
      {posts.map((post) => (
        <div className={style.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
