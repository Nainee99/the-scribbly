import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

// Dummy data for testing UI
// const dummyPosts = [
//   {
//     _id: "1",
//     title: "Exploring the Future of Web Development",
//     desc: "Web development is evolving rapidly. In this post, we look at upcoming trends and tools shaping the future.",
//     img: "/p1.jpeg",
//     createdAt: "2025-06-07",
//   },
//   {
//     _id: "2",
//     title: "How to Maintain a Minimalist Lifestyle",
//     desc: "Learn the core principles of minimalism and how simplifying your life can bring peace and focus.",
//     img: "/p1.jpeg",
//     createdAt: "2025-06-05",
//   },
//   {
//     _id: "3",
//     title: "Exploring the Future of Web Development",
//     desc: "Web development is evolving rapidly. In this post, we look at upcoming trends and tools shaping the future.",
//     img: "/p1.jpeg",
//     createdAt: "2025-06-07",
//   },
//   {
//     _id: "4",
//     title: "How to Maintain a Minimalist Lifestyle",
//     desc: "Learn the core principles of minimalism and how simplifying your life can bring peace and focus.",
//     img: "/p1.jpeg",
//     createdAt: "2025-06-05",
//   },
// ];

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  // const posts = dummyPosts;
  // const count = dummyPosts.length;

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
