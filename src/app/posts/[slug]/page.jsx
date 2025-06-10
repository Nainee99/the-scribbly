import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  try {
    let baseUrl;
    if (process.env.VERCEL_URL) {
      baseUrl = `https://${process.env.VERCEL_URL}`;
    } else if (process.env.NEXT_PUBLIC_HOST_URL) {
      baseUrl = `https://${process.env.NEXT_PUBLIC_HOST_URL}`;
    } else {
      baseUrl = "http://localhost:3000";
    }
    const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
      cache: "no-store",
    });
    if (res.status !== 200) {
      const text = await res.text();
      console.error("API error:", res.status, text);
      throw new Error("Failed to fetch post");
    }
    return res.json();
  } catch (err) {
    console.error("Error fetching post data:", err);
    return null;
  }
};

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  if (!data) {
    return (
      <div className={styles.container}>
        <p>Sorry, this post could not be loaded.</p>
        <Menu />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt={data.user.name || "User"}
                  fill
                  className={styles.avatar}
                  sizes="48px"
                  priority
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user?.name}</span>
              <span className={styles.date}>{formatDate(data?.createdAt)}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              alt={data.title || "Post image"}
              fill
              className={styles.image}
              sizes="100vw"
              priority
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
