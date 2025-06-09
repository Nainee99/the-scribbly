"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./menuCategories.module.css";
import { getCategoryColor } from "@/utils/categoryColor";

const MenuCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_CATEGORIES_API_URL);
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  console.log("categories", categories);

  return (
    <div className={styles.categoryList}>
      {categories.map((cat) => (
        <Link
          key={cat.id}
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
