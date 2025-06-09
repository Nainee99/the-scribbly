"use client";

import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";
import { getCategoryColor } from "@/utils/categoryColor";
import { useCategory } from "@/context/CategoryContext";

const MenuCategories = () => {
  const categories = useCategory();

  if (!categories) return <div>Loading...</div>;

  return (
    <div className={styles.categoryList}>
      {categories.map((cat) => (
        <Link
          key={cat.id || cat._id}
          href={`/blog?cat=${cat.slug || cat.title.toLowerCase()}`}
          className={styles.categoryItem}
          style={{
            background: getCategoryColor(cat.slug || cat.title.toLowerCase()),
            color: "#000",
          }}
        >
          {cat.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
