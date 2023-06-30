"use client"

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Button } from "@/components";
import Head from "next/head";

const About = () => {
  return (
    <>

       <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about"
          fill
          className={styles.image}
        />

        <div className={styles.imageText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafing award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.item}>
          <h1 className=" text-2xl font-bold pb-5"> Who Are You? </h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?</p>
        </div>
        <div className={styles.item}>
          <h1 className=" text-2xl font-bold pb-5 ">What We Do?</h1>
          <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps</p>
          <Button
             title='See Our Works'
             buttonStyles='m-2 bg-gradient-to-r from-green-500 to-gray-500 rounded-lg hover:opacity-50 text-opacity-100 transition-opacity duration-300'
             textStyles='text-black text-[14px] leading-[17px] font-bold p-2'
               buttonIcon='/heart-filled.svg'
            handleClick={() => console.log("click")}
          />
        </div>
      </div>
    </div>
    </>
   
  );
};

export default About;
