import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// TODO: Uncomment the following function to fetch real data from the API
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

// Dummy data to preview UI
const dummyData = [
  {
    _id: "1",
    title: "Coding",
    slug: "coding",
    img: "/coding.png",
  },
  {
    _id: "2",
    title: "Culture",
    slug: "culture",
    img: "/culture.png",
  },
  {
    _id: "3",
    title: "Travel",
    slug: "travel",
    img: "/travel.png",
  },
  {
    _id: "4",
    title: "Food",
    slug: "food",
    img: "/food.png",
  },
];

const CategoryList = async () => {
  // const data = await getData();
  const data = dummyData;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
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
