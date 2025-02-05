"use client";

import Image from "next/image";
import styles from "./home.module.css";
import Hero from "public/hero.png";
import { Button } from "@/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={`${styles.gradient} ${styles.title}`}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          gloal tech industry.
        </p>
        <div className="">
          <Button
            title="See Our Works"
            buttonStyles="m-2  bg-primary-blue rounded-xl sm:rounded-full py-[16px] hover:bg-slate-500 text-opacity-100 transition-opacity duration-300"
            textStyles="text-black text-[14px] leading-[17px] font-bold pr-3 pl-3"
            buttonIcon="/right-arrow.svg"
            handleClick={() => console.log("click")}
          />
        </div>
      </div>
      <div className={styles.item}>
        {/* <Image src={Hero} alt="hero" className={styles.image} /> */}
      </div>
    </div>
  );
}
