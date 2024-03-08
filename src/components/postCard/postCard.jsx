/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        {post.img && (
          <div className={style.imgContainer}>
            <Image src={post.img} alt="" fill className={style.img} />
          </div>
        )}
        <span className={style.date}>01.01.2022</span>
      </div>
      <div className={style.bottom}>
        <h1 className={style.title}>{post.title}</h1>
        <p className={style.description}>{post.body}</p>
        <Link href={`blog/${post.slug}`} className={style.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
