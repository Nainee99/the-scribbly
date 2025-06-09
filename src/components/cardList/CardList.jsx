"use client";
import React, { useEffect } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { usePost } from "@/context/PostContext";

const POST_PER_PAGE = 5;

const CardList = ({ page, cat }) => {
  const { posts, count, fetchPosts, loading } = usePost();

  useEffect(() => {
    fetchPosts(page, cat);
  }, [page, cat]);

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  if (loading) return <div>Loading...</div>;

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
