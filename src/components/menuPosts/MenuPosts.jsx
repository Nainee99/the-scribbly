import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";
import { getCategoryColorVibrant } from "@/utils/categoryColor";

const MenuPosts = ({ posts = [], withImage }) => {
  return (
    <div className={styles.items}>
      {posts.map((post) => (
        <Link
          href={`/posts/${post.slug}`}
          className={styles.item}
          key={post.id}
        >
          {withImage && post.img && (
            <div className={styles.imageContainer}>
              <Image
                src={post.img}
                alt={post.title}
                fill
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span
              className={styles.category}
              style={{
                backgroundColor: getCategoryColorVibrant(post.catSlug || ""),
              }}
            >
              {post.catSlug?.charAt(0).toUpperCase() + post.catSlug?.slice(1)}
            </span>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>
                {post.user?.name || post.userEmail}
              </span>
              <span className={styles.date}>
                {" - "}
                {new Date(post.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
