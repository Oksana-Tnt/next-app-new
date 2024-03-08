import React from "react";
import style from "./contact.module.css";
import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const ContactPage = () => {
  const a = 1;
  console.log(a);
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src="/contact.png" alt="" fill className={style.img} />
      </div>
      <div className={style.formContainer}>
        <form action="" className={style.form}>
          <input tpe="text" placeholder="name and Sername" />
          <input tpe="text" placeholder="email adress" />
          <input tpe="text" placeholder="phone number (optional)" />
          <textarea mane="" id="" col="30" row="10" placeholder="message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
