import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to theScribbly!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            A space to write freely and read deeply.
          </h1>
          <p className={styles.postDesc}>
            theScribbly is where words matter. Dive into personal essays,
            creative pieces, and thoughtful commentary from a growing community
            of curious minds. Whether you're here to write or just to read,
            you've found your corner of the internet.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
