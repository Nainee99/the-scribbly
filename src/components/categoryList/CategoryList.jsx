"use client";
import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { getCategoryColor } from "@/utils/categoryColor";
import { useCategory } from "@/context/CategoryContext";

const CategoryList = () => {
  const categories = useCategory();

  if (!categories) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.slice(0, 6).map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={styles.category}
            key={item.id || item._id}
            style={{
              background: getCategoryColor(item.slug),
              color: "#000",
            }}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
