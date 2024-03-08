/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import style from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.subtitle}>About agency</h2>
        <h1 className={style.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p className={style.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className={style.boxes}>
          <div className={style.box}>
            <h1>10+</h1>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10+</h1>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={style.imgContainer}>
        <Image src="/about.png" fill alt="Abour image" className={style.img} />
      </div>
    </div>
  );
};

export default AboutPage;
