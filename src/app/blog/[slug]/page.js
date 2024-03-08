/* eslint-disable jsx-a11y/alt-text */
import React, { Suspense } from "react";
import style from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

//Fetch data with an ATP
const getData = async (slug) => {
  const res = await fetch(` http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  //Fetch data with an API
  const post = await getData(slug);

  //Fetch datat without an API
  // const post = await getPost(slug);
  console.log(post);

  return (
    <div className={style.container}>
      {post.img && (
        <div className={style.imgContainer}>
          <Image src={post.img} fill alt="" className={style.img} />
        </div>
      )}
      <div className={style.textContainer}>
        <h1 className={style.title}>{post.title}</h1>
        <div className={style.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={style.detailText}>
            <span className={style.detailTitle}>Published</span>
            <span className={style.detailValue}>{post.data}</span>
          </div>
        </div>
        <div className={style.contant}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
