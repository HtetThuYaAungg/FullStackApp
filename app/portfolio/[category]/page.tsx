"use client"

import React from 'react';
import styles from './page.module.css'
import { Button } from '@/components';
import Image from 'next/image';
import { items } from '@/constants';
import { notFound } from 'next/navigation';



interface CategoryProps {
  params: {
    category: any;
  };
}

interface ItemProps {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const getData = (cat: keyof typeof items):any => {
  const data = items[cat]
  if (data) {
    return data
  }
  return notFound()
}

const Category: React.FC<CategoryProps> = ({ params }) => {
  console.log(params);

  const data = getData(params.category)

  return (
    <div className={styles.container}>

      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item:ItemProps) => (
         <div className={styles.item} key={item.id}>
         <div className={styles.content}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
           <Button
           title='See More'
           buttonStyles='m-2 bg-gradient-to-r from-green-500 to-gray-500 rounded-lg hover:opacity-50 text-opacity-100 transition-opacity duration-300'
           textStyles='text-black text-[14px] leading-[17px] font-bold p-2'
             buttonIcon=''
          handleClick={() => console.log("click")}
        />
         </div>
         <div className={styles.imgContainer}>
           <Image
             className={styles.img}
             alt="category"
             fill
             src={item.image}
           />
         </div>
       </div>
      ))}
     

    </div>
  );
};

export default Category;
