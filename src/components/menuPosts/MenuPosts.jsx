import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="Travel article"
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            7 Hidden Destinations You Need to Visit Before Everyone Else Does
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="Culture article"
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            How Storytelling Preserves Culture in the Digital Age
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jane Smith</span>
            <span className={styles.date}> - 12.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="Food article"
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            From Scratch: The Joy of Cooking Slow and Simple Meals
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Alex Nguyen</span>
            <span className={styles.date}> - 14.03.2023</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt="Fashion article"
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            The Rise of Conscious Fashion: Style with a Story
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Mia Carter</span>
            <span className={styles.date}> - 16.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
