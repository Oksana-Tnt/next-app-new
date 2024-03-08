import React from "react";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>lamadev</div>
      <div className={style.text}>Lama creative agency All rights reserved</div>
    </div>
  );
};

export default Footer;
