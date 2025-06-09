"use client";

import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  const [popularPosts, setPopularPosts] = useState([]);
  const [editorPosts, setEditorPosts] = useState([]);

  useEffect(() => {
    fetch(`/api/posts/random?count=4`)
      .then((res) => res.json())
      .then((data) => setPopularPosts(data));
    fetch(`/api/posts/random?count=5`)
      .then((res) => res.json())
      .then((data) => setEditorPosts(data));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts posts={popularPosts} withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts posts={editorPosts} withImage={true} />
    </div>
  );
};

export default Menu;
