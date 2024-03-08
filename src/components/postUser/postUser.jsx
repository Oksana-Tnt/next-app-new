import React from "react";
import style from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

//Fetch data with an API
// const getData = async (userId) => {
//   const res = await fetch(
//     ` https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //fetch data with an API
  //   const user = await getData(userId);

  //Fetch data without an API
  const user = await getUser(userId);

  return (
    <div className={style.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        className={style.avatar}
        width={50}
        height={50}
        alt=""
      />

      <div className={style.text}>
        <span className={style.title}>Author</span>
        <span className={style.username}>{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
