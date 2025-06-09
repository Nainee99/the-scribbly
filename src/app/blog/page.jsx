import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page, 10) || 1;
  const cat = searchParams.cat || "";

  // Fallback title
  const title = cat ? `${cat} Blog` : "All Blogs";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
