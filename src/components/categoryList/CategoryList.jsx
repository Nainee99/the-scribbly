import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// Generates a very light pastel HSL color based on slug
function getCategoryColor(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 92%)`; // lighter pastel
}

// Fetch categories from API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.slice(0, 6).map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={styles.category}
            key={item.id || item._id}
            style={{
              background: getCategoryColor(item.slug),
              color: "#000", // Ensures text is black
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
