// import React from 'react';
// import useSWR from 'swr';

//   const fetcher = async (url: string) => {
//     const response = await fetch(url);
//     return response.json();
//   };

//   const DashBoard: React.FC = () => {
//     const { data, error, isValidating } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

//   console.log("data",data)

//   return (
//     <div>
//       DashBoard
//     </div>
//   )
// }

// export default DashBoard

"use client";
import { useSession } from "next-auth/react";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import styles from "./page.module.css";
import Image from "next/image";
import { PostProps } from "@/types";

const DashBoard = () => {
  const session = useSession();

  const router = useRouter();

  const username = session?.data?.user?.name;

  const fetcher = (...args: any[]) =>
    fetch(...(args as [RequestInfo, RequestInit])).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts/?username=${username}`,
    fetcher
  );

  console.log({ data });

  const handleDelete = async (id: any) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement | HTMLTextAreaElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement | HTMLButtonElement;
    const form = e.target as HTMLFormElement;

    const title = (
      target.querySelector<HTMLInputElement>(
        '[name="title"]'
      ) as HTMLInputElement
    ).value;
    const desc = (
      target.querySelector<HTMLInputElement>(
        '[name="desc"]'
      ) as HTMLInputElement
    ).value;
    const img = (
      target.querySelector<HTMLInputElement>('[name="img"]') as HTMLInputElement
    ).value;
    const content = (
      target.querySelector<HTMLTextAreaElement>(
        '[name="content"]'
      ) as HTMLTextAreaElement
    ).value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username,
        }),
      });
      mutate();
      form.reset();
      // Handle the response
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading"
            : data?.map((post: PostProps) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgcontainer}>
                    {/* <Image className={styles.img} src={post.img} alt='new posts' width={200} height={100} /> */}
                  </div>
                  <div className="mx-auto flex flex-row gap-5 justify-between items-center">
                    <h2 className={styles.title}>{post.title}</h2>
                    <span
                      className={styles.delete}
                      onClick={() => handleDelete(post._id)}
                    >
                      X
                    </span>
                  </div>
                </div>
              ))}
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className=" text-4xl font-bold">Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Desc"
            name="desc"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Image"
            name="img"
            className={styles.input}
            required
          />
          <textarea
            placeholder="Content"
            name="content"
            className={styles.textarea}
            cols={30}
            rows={10}
          />
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default DashBoard;
