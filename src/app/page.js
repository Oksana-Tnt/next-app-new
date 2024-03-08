import Image from "next/image";
import style from "./home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Creative Thoughts Agency</h1>
        <p className={style.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className={style.buttons}>
          <button className={style.button}>Learn more</button>
          <button className={style.button}>Contact</button>
        </div>
        <div className={style.brands}>
          <Image src="/brands.png" alt="" fill className={style.brandImg} />
        </div>
      </div>
      <div className={style.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={style.heroImg} />
      </div>
    </div>
  );
}
